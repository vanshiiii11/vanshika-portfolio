#!/usr/bin/env python3
"""
Image Processing Script for Vanshika's Portfolio
Grades the transparent cutout (public/assets/vanshika-cutout.png) with:
- High contrast black-and-white
- Crimson-tinted shadow undertones (#8B0D1A)
- Soft gradient alpha fade at the waist (bottom 25%)
- Subtle grain texture
- Exports to public/assets/vanshika-cutout-graded.png and .webp
"""

import os
import sys
import numpy as np
from PIL import Image, ImageEnhance, ImageOps

ASSETS_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'public', 'assets')

def process_portrait():
    cutout_path = os.path.join(ASSETS_DIR, 'vanshika-cutout.png')
    
    if not os.path.exists(cutout_path):
        print(f"[-] Cutout not found at {cutout_path}")
        return False

    print(f"[+] Found transparent cutout at {cutout_path}")
    im = Image.open(cutout_path)
    
    # Ensure RGBA
    if im.mode != 'RGBA':
        im = im.convert('RGBA')

    # Extract original transparency mask
    r_ch, g_ch, b_ch, a_ch = im.split()
    orig_alpha = np.array(a_ch, dtype=np.float32) / 255.0

    im_rgb = Image.merge('RGB', (r_ch, g_ch, b_ch))
    w, h = im_rgb.size
    target_h = 1200
    target_w = int(w * (target_h / h))
    im_resized = im_rgb.resize((target_w, target_h), Image.Resampling.LANCZOS)

    alpha_im = Image.fromarray((orig_alpha * 255).astype(np.uint8), mode='L')
    alpha_resized = np.array(alpha_im.resize((target_w, target_h), Image.Resampling.LANCZOS), dtype=np.float32) / 255.0

    # 1. High contrast B&W
    gray = ImageOps.grayscale(im_resized)
    enhancer = ImageEnhance.Contrast(gray)
    high_contrast = enhancer.enhance(1.4)

    # 2. Crimson tinted shadows
    arr = np.array(high_contrast, dtype=np.float32) / 255.0
    r = arr.copy()
    g = arr.copy()
    b = arr.copy()

    # Shadow mask (higher where pixels are dark)
    shadow_mask = np.clip(1.0 - arr * 1.4, 0.0, 1.0)
    # Crimson tint #8B0D1A
    r = np.clip(r + shadow_mask * 0.28, 0.0, 1.0)
    g = np.clip(g - shadow_mask * 0.05, 0.0, 1.0)
    b = np.clip(b - shadow_mask * 0.03, 0.0, 1.0)

    # 3. Subtle grain
    np.random.seed(42)
    grain = (np.random.rand(target_h, target_w) - 0.5) * 0.03
    r = np.clip(r + grain, 0.0, 1.0)
    g = np.clip(g + grain, 0.0, 1.0)
    b = np.clip(b + grain, 0.0, 1.0)

    # 4. Soft bottom gradient dissolve (last 28%)
    fade_start = int(target_h * 0.72)
    final_alpha = alpha_resized.copy()
    for y in range(fade_start, target_h):
        factor = (target_h - y) / (target_h - fade_start)
        # smooth cubic ease
        factor = factor * factor * (3.0 - 2.0 * factor)
        final_alpha[y, :] *= factor

    rgb_out = (np.stack([r, g, b], axis=-1) * 255.0).astype(np.uint8)
    out_im = Image.fromarray(rgb_out, mode='RGB').convert('RGBA')
    alpha_channel = Image.fromarray((final_alpha * 255.0).astype(np.uint8), mode='L')
    out_im.putalpha(alpha_channel)

    graded_png = os.path.join(ASSETS_DIR, 'vanshika-cutout-graded.png')
    graded_webp = os.path.join(ASSETS_DIR, 'vanshika-cutout-graded.webp')
    out_im.save(graded_png, 'PNG', optimize=True)
    out_im.save(graded_webp, 'WEBP', quality=90)
    print(f"[✓] Successfully generated graded cutout asset: {graded_png} ({target_w}x{target_h})")
    return True

if __name__ == '__main__':
    process_portrait()
