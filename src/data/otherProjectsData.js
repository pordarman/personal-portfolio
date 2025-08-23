// GitHub'da olmayan diğer projelerimizi burada tutacağız.
// Her projenin kendine özgü bir 'id'si olmalı.
import spiritfallIcon from '../assets/spiritfall_preview.webp';

export const otherProjects = [
  {
    id: 'spiritfall-2d-pixel-game', // URL için kullanılacak benzersiz kimlik
    name: 'Spiritfall - 2D Pixel Game',
    description: 'Face a corrupted wilderness in this top-down action roguelite. A vile spirit has twisted animals into monsters, and you must survive their hordes. Your goal: purify, don\'t kill.',
    imageUrl: spiritfallIcon,
    tags: ['C#', 'Unity', 'Oyun Geliştirme', 'Pixel Art'],
    language: 'C#',
    projectUrl: null,
    source: 'local',
    stars: null,
    createdAt: '2025-06-28',
    updatedAt: '2025-08-14',
    onGoing: true,
    order: 1,
    readme: `
# Spiritfall - 2D Top-Down Pixel Art Oyunu

Bu proje, C# ve Unity oyun motoru kullanılarak geliştirilen, rogue-lite mekaniklerine sahip bir 2D pixel-art aksiyon oyunudur.

## 🎮 Oyunun Konsepti

Oyuncular, bozulmuş bir ruh tarafından canavarlara dönüştürülmüş hayvanlarla dolu bir dünyada hayatta kalmaya çalışan bir karakteri yönetir. Oyunun temel amacı öldürmek değil, bu ruhları **arındırmaktır**.

* **Aksiyon ve Hayatta Kalma:** Sürekli artan düşman dalgalarına karşı savaşın.
* **Rogue-lite Mekanikleri:** Her oyunda farklı yetenek kombinasyonları oluşturarak kendinizi güçlendirin.
* **Arındırma Mekaniği:** Düşmanları öldürmek yerine onları arındırarak seviye atlayın ve yeni yetenekler kazanın.

## 🛠️ Kullanılan Teknolojiler

* **Oyun Motoru:** Unity 2022.3
* **Programlama Dili:** C#
* **Grafikler:** Aseprite ile oluşturulan Pixel Art

## 🖼️ Geliştirme Sürecinden Görüntüler

![Oyun İçi Görüntü 1](https://your-image-host.com/oyun-goruntu-1.png)
    `
  },
  // Gelecekte buraya başka projeler ekleyebilirsin...
];