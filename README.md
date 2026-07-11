# VNexpress website with automation testing

## Test function  Mục Giáo dục - Tuyển sinh - Điểm thi - Tra cứu đại học

- Sử dụng playwright - typescript để build framework automation-testing
- Sử dụng selector Xpath để locator phần tử của page

- File test-case: https://docs.google.com/spreadsheets/d/1kRWIOnUFr45H-opoBQn1tH0xZrCncoa3EilUBL522vc/edit?usp=sharing

- Structure dự án: 

```
VNEXPRESS-PLAYWRIGHT/
│
├── page/                 # Page Object Model
│   ├── base-page/
│   ├── university/
│
├── tests/                 # Test Scripts
│   ├── university/
│
├── playwright-report/     # HTML Report
│
├── test-results/          # Screenshot, Video, Trace
│
├── package.json
├── playwright.config.ts
└── .gitignore
```

- Chạy lệnh 

```
Cách 1
npx playwright test (copy relative path file vào)

Cách 2
npx playwright test -g "test-name-text"
```