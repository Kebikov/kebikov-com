import type { IImageWedding } from '@/data/image/weddings/types';
import imgJpg_1000 from '@image/header-image/1000.jpg';
import imgWebp_1000 from '@image/header-image/1000.webp';
import imgAvif_1000 from '@image/header-image/1000.avif';
import imgJpg_1920 from '@image/header-image/1920.jpg';
import imgWebp_1920 from '@image/header-image/1920.webp';
import imgAvif_1920 from '@image/header-image/1920.avif';
import imgJpg_2560 from '@image/header-image/2560.jpg';
import imgWebp_2560 from '@image/header-image/2560.webp';
import imgAvif_2560 from '@image/header-image/2560.avif';

export const IMG_header_image: {[key in 1000 | 1920 | 2560]: IImageWedding} = {
    1000:{
        jpg: imgJpg_1000,
        webp: imgWebp_1000,
        avif: imgAvif_1000,
    },
    1920:{
        jpg: imgJpg_1920,
        webp: imgWebp_1920,
        avif: imgAvif_1920,
    },
    2560:{
        jpg: imgJpg_2560,
        webp: imgWebp_2560,
        avif: imgAvif_2560,
    }
};