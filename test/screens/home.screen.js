const { expect } = require('@wdio/globals')


class HomeScreen {
        get buttonForm() { return $('//android.widget.Button[@content-desc="Forms"]');}
    
        get inputField() { return $('~text-input');} 
        get inputResult() { return $('~input-text-result');} 
        get dropDown() { return $('//android.view.ViewGroup[@content-desc="Dropdown"]/android.view.ViewGroup/android.widget.EditText');} 
        get selectDroopDown() {return $$('id:resource-id-android:id/text1')[2];} 
        get activeBtn() { return $('~button-Active');}
        get titleForm() { return $$('//android.view.ViewGroup/android.view.ViewGroup[1]')[4]}
        get titleBtn() { return $('//android.view.ViewGroup/android.view.ViewGroup[4]');}

      //  get activeMessage(){ return $('id:resource-id-android:id/alertTitle');}

        async goToFillForm(){
          await this.buttonForm.waitForDisplayed()
          await this.buttonForm.click()

          await this.inputField.waitForDisplayed()
          await this.inputField.click()
          await this.inputField.setValue('Hello EBAC Lovers')        
          await this.inputResult.waitForDisplayed()          
          await expect(this.inputResult).toHaveText('Hello EBAC Lovers')
        
          await this.titleForm.waitForDisplayed()
          await this.titleForm.click()
          
          
          await this.activeBtn.waitForDisplayed()
          await this.activeBtn.click()
          
        }
        async activeBtnMessage(){
          return this.activeMessage()
        }

}

module.exports = new HomeScreen();