const {Builder, Capabilities, By} = require('selenium-webdriver')
require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async ()=>{
    await driver.quit()
})

test('add a movie to the list', async () => {
    //This will search the DOM(webpage) for the input field creating a path for xpath to find.
    const inputField = await driver.findElement(By.xpath('//input'))
    //This will go to our input field and enter in "Tron"
    await inputField.sendKeys('Tron: Legacy')
    await driver.sleep(2000)

    const theButton = await driver.findElement(By.css('button'))
    await theButton.click()
    await driver.sleep(2000)
})

test('mark movie as watched', async () => {
    const mark = await driver.findElement(By.xpath(`//span[text()="Tron: Legacy"]`))
    //This searches using XPATH, selecting the <span> element and searching for specifically the text of "Tron: Legacy"
    await mark.click()
    await driver.sleep(2000)
})

test('check for watched text', async () => {
    await driver.findElement(By.className('hide'))
    //  This searches using CSS by class name.
})

test('delete movie from list', async () => {
    const deleteButton = await driver.findElement(By.id('Tron:Legacy'))
    // This searches uses CSS by ID.
    await deleteButton.click()
    await driver.sleep(2000)
})