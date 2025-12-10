AFRAME.registerComponent("trigger-poster1-click", {
  init: function () {
    var el = this.el; // The source object
    el.addEventListener("click", function () {
      var targetEl = document.querySelector("#posterOne"); // The target object
      if (targetEl) {
        targetEl.emit("runAnimation"); // Emit the custom event
      }
    });
  },
});

AFRAME.registerComponent("trigger-poster2-click", {
  init: function () {
    var el = this.el; // The source object
    el.addEventListener("click", function () {
      var targetEl = document.querySelector("#posterTwo"); // The target object
      if (targetEl) {
        targetEl.emit("runAnimation"); // Emit the custom event
      }
    });
  },
});

AFRAME.registerComponent("trigger-poster3-click", {
  init: function () {
    var el = this.el; // The source object
    el.addEventListener("click", function () {
      var targetEl = document.querySelector("#posterThree"); // The target object
      if (targetEl) {
        targetEl.emit("runAnimation"); // Emit the custom event
      }
    });
  },
});

AFRAME.registerComponent("trigger-poster4-click", {
  init: function () {
    var el = this.el; // The source object
    el.addEventListener("click", function () {
      var targetEl = document.querySelector("#posterFour"); // The target object
      if (targetEl) {
        targetEl.emit("runAnimation"); // Emit the custom event
      }
    });
  },
});

AFRAME.registerComponent("trigger-poster5-click", {
  init: function () {
    var el = this.el; // The source object
    el.addEventListener("click", function () {
      var targetEl = document.querySelector("#posterFive"); // The target object
      if (targetEl) {
        targetEl.emit("runAnimation"); // Emit the custom event
      }
    });
  },
});
