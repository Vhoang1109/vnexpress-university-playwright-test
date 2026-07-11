import { test } from "@playwright/test";
import { UniPage } from "../page/university/uni.page";

test.describe("VNExpress - University Search", () => {
  let uniPage: UniPage;

  test.beforeEach(async ({ page }) => {
    uniPage = new UniPage(page);

    await test.step("Navigate to university search page", async () => {
      await uniPage.gotoHomePage();
      await uniPage.clickEducate();
      await uniPage.clickAdmissions();
      await uniPage.clickExamScore();
      await uniPage.clickUniversitySearch();
      await uniPage.verifyUniversitySearchPage();
    });
  });

  test("UNI_001 - Verify university search tabs", async () => {
    await test.step("Open major search tab", async () => {
      await uniPage.clickFindMajor();
    });

    await test.step("Open search by score tab", async () => {
      await uniPage.clickSearchByPoint();
    });

    await test.step("Open search by tuition tab", async () => {
      await uniPage.clickSearchByTuition();
    });

    await test.step("Open school search tab", async () => {
      await uniPage.clickFindSchool();
    });
  });
});