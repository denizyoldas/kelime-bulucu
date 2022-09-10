# Türkçe Kelime Bulucu

Wordle oyununu hepimiz biliyoruzdur. Bu younda bazen zorluklar yaşayabiliyoruz. Bu yüzden bu oyunu çözmek için bir program yazdım. Bu programı kullanarak oyunu kolayca çözebilir yada bu programı farklı bir amaçla kullanabilirsiniz.

## Kullanım

Kelime harf sayısını giriyoruz ve harf sayısı kadar kutu elde ediyoruz. Bu kutuların içersine bildiğimiz harfleri yazıyoruz. Bilmediklerimize ise `?` yazıyoruz. Programımız bu harfleri kullanarak bize kelime önerileri sunuyor.

## Örnek

Harf sayısına 5 yazıyoruz. Ardından gelen kutulardan ilkine d ikincisine a kalanlara ise `?` yazıyoruz. Ardından `Bul` butonuna basıyoruz. Programımız bize `dadaş`, `dağar` vb. kelimeleri öneriyor. Bu kelimeyi oyunumuzda kullanıyoruz.

## Folder Structure

```
.
├── README.md
├── LICENSE
├── src
│ ├── App.tsx
│ ├── index.css
│ ├── main.tsx
│ │── components
│ │ ├── letter-input.tsx
│ │ ├── list.tsx
│ └── data
│ └── kelimeler.json
└── .gitignore
```

## License

MIT

## Author

[Deniz Yoldaş Aksu](https://denizaksu.dev)

## referance

Kelime json [f](https://github.com/f)
