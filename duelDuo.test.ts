
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button displays "choices', async ()=> {
    await driver.sleep(1000)
    const button = await driver.findElement(By.id('draw')).click()
    await driver.sleep(1000) 
})
test("add to duo", async () => {
    const addBtn = await driver.findElement(By.xpath("//div/button")).click()
})