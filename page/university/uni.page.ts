import { test, expect, Page } from "@playwright/test";
import { BasePage } from "../base-page/base.page";

export class UniPage extends BasePage {


    eduLocatorXpath = "(//a[@title='Giáo dục'])[1]";
    eduAdmissionsXpath = "(//a[@title='Tuyển sinh'])[1]";
    eduExamScoreXpath = "//a[@title='Điểm thi']";
    uniSeachXpath = "(//a[contains(text(),'tra cứu đại học')])[1]";
    // search university school locator
    uniFindSchoolXpath = "//a[.//strong[normalize-space()='Tìm trường']]";
    uniFindMajorXpath = "//a[.//strong[normalize-space()='Tìm ngành']]";
    uniSearchbyPointXpath = "//a[.//strong[normalize-space()='Tìm theo điểm']]";
    uniSearchByTutition = "//a[.//strong[normalize-space()='Tìm theo học phí']]";

    //trong hàm tạo có bao nhiêu tk, khi dùng khởi tạo bấy nhiêu
    constructor(page: Page) {
        super(page);
    }

    // Actions
    async clickEducate() {
        await this.page.locator(this.eduLocatorXpath).click();
    }

    async clickAdmissions() {
        await this.page.locator(this.eduAdmissionsXpath).click();
    }

    async clickExamScore() {
        await this.page.locator(this.eduExamScoreXpath).click();
    }

    async clickUniversitySearch() {
        await this.page.locator(this.uniSeachXpath).click();
    }

    // Bắt đầu đến page university

    // Action with page tim trường
    async clickFindSchool() {
        await this.page.locator(this.uniFindSchoolXpath).click();
    }

    // Action with page tim chuyên ngành
    async clickFindMajor() {
        await this.page.locator(this.uniFindMajorXpath).click();
    }

    // Action with page tìm theo điểm
    async clickSearchByPoint() {
        await this.page.locator(this.uniSearchbyPointXpath).click();
    }

    // Action with page tìm theo khoá học
    async clickSearchByTuition() {
        await this.page.locator(this.uniSearchByTutition).click();
    }

    async verifyUniversitySearchPage() {
        await expect(this.page.locator(this.uniFindMajorXpath)).toBeVisible();

        await expect(this.page.locator(this.uniSearchbyPointXpath)).toBeVisible();

        await expect(this.page.locator(this.uniSearchByTutition)).toBeVisible();
    }
}