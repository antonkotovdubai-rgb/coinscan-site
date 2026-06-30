# Как открыть сайт CoinScan локально на Mac

1. Открой Terminal.
2. Перейди в папку сайта:

```bash
cd /путь/к/coinscan-site
```

Например, если папка лежит в Downloads:

```bash
cd ~/Downloads/coinscan-site
```

3. Установи зависимости:

```bash
npm install
```

4. Запусти сайт:

```bash
npm run dev
```

5. Открой в браузере:

```text
http://localhost:3000
```

Если порт 3000 занят, Next.js может предложить другой порт, например:

```text
http://localhost:3001
```

## Проверка сборки

```bash
npm run build
```

В исправленной версии сборка проходит успешно.
