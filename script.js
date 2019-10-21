class SiblingTree {
  constructor() {
    this.objArr = [];
  }

  clickEvent(event) {
    const ulList = document.querySelector('.tree');
    let item = event.target.closest('.tree__item');
    
    if (!item || !ulList.contains(item)) {
      return;
    }

    let findResult = this.objArr.filter(obj => obj.propertyName === item.innerHTML)

    if (!findResult.length) {
      let propertyName = item.innerHTML;
      let html = item.parentElement.innerHTML;
      this.objArr.push({propertyName, html});
      item.parentElement.innerHTML = `<span class="tree__item">${item.innerHTML}</span>`;
    } else {
      item.parentElement.innerHTML = findResult[0].html;
      let index = this.objArr.findIndex(obj => obj.propertyName === findResult[0].propertyName);
      this.objArr.splice(index, 1);
    } 
  }

  addEvents() {
    const list = document.querySelector('.tree');
    list.addEventListener('click', this.clickEvent.bind(this));
  }
}

const s = new SiblingTree();
s.addEvents();