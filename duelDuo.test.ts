
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
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

test('Draw button displays choices', async ()=> {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(1000) 
    let choicesContainer = await driver.findElement(By.id('choices')).getText()
    expect(choicesContainer).not.toEqual('')
})
test("add to duo", async () => {
    await driver.findElement(By.className('bot-btn')).click()
    await driver.sleep(2000)
    let duoContainer = await driver.findElement(By.id('player-duo')).getText()
    expect(duoContainer).not.toEqual('')

})

test('bots show up on button click', async ()=> {
    await driver.findElement(By.id('see-all')).click()
    await driver.sleep(1000)
    let botsDiv = await driver.findElement(By.id('all-bots')).getText()
    expect(botsDiv).not.toEqual('')
})