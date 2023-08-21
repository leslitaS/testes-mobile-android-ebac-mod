const { expect } = require('@wdio/globals')

const homeScreen = require('../screens/home.screen')

describe('Fill form', () => {
    it('should login with valid credentials', async () => {
        await homeScreen.goToFillForm()

        expect(await $('id:resource-id-android:id/alertTitle')).toBeDisplayed()
        expect(await $('id:resource-id-android:id/alertTitle')).toHaveText('This button is')

    })
})

