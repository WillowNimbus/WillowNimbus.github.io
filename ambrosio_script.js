export function make(elementType) {
    return {
      from: function(id) {
        this.id = id;
        return this;
      },
      injectTo: function(parentElement) {
        this.parentElement = parentElement;
        return this;
      },
      content: function(content) {
        this.content = content;
        return this;
      },
      create: function() {
        let newElement = document.createElement(elementType);
        newElement.id = this.id;
        newElement.innerHTML = this.content;
        let parent = document.querySelector(this.parentElement);
        if (!parent) {
          console.log("Parent element not found!");
          return;
        }
        parent.appendChild(newElement);
      }
    };
  }
  
  export function id(name) {
    let element = document.getElementById(name);
    return {
      AddClass: function(className) {
        element.classList.add(className);
      },
      RemoveClass: function(className) {
        element.classList.remove(className);
      },
      ToggleClass: function(className) {
        element.classList.toggle(className);
      }
    };
  }
  
  export function img(src) {
    return {
      id: function(id) {
        this.id = id;
        return this;
      },
      alt: function(alt) {
        this.alt = alt;
        return this;
      },
      to: function(parentElement) {
        let newImg = document.createElement("img");
        newImg.src = src;
        newImg.id = this.id;
        newImg.alt = this.alt;
        let parent = document.querySelector(parentElement);
        if (!parent) {
          console.log("Parent element not found!");
          return;
        }
        parent.appendChild(newImg);
      }
    };
  }

export function toggleDisplay(elementId) {
  const element = document.getElementById(elementId);
  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}

export function new_css(path_to_css) {
    const link = document.createElement('link');
    link.href = path_to_css;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }

export function new_favicon(path_to_favicon) {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = path_to_favicon;
    document.head.appendChild(link);
}

export function icon(iconName) {
    new_css('https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
  
    const iconElement = document.createElement('span');
    iconElement.className = `material-symbols-rounded ${iconName}`;
    iconElement.textContent = iconName;
    iconElement.innerText = iconName;
  
    const methods = {
      id: function(id) {
        iconElement.id = id;
        return methods;
      },
      to: function(parentId) {
        const parentElement = document.getElementById(parentId);
        parentElement.appendChild(iconElement);
        return methods;
      }
    };
  
    return methods;
  }