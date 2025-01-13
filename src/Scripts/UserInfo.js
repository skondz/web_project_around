export default class UserInfo {
  constructor({ nameSelector, jobSelector }, popupSelector) {
    this._nameSelector = nameSelector;
    this._jobSelector = jobSelector;
    this._popupSelector = popupSelector;
  }

  getUserInfo() {
    return {
      name: this._nameSelector.textContent,
      job: this._jobSelector.textContent,
    };
  }
  setUserInfo() {
    this._nameSelector.textContent =
      this._popupSelector.querySelector("#input-name").value;
    this._jobSelector.textContent =
      this._popupSelector.querySelector("#input-title").value;
  }
}
