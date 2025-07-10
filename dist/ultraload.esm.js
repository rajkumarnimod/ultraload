var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var ultraloadExports = {};
var ultraload$1 = {
  get exports(){ return ultraloadExports; },
  set exports(v){ ultraloadExports = v; },
};

(function (module, exports) {
	// UltraLoad.js - Universal Module Definition (UMD)
	(function (root, factory) {
	  if (module.exports) {
	    // CommonJS (Node)
	    module.exports = factory();
	  } else {
	    // CommonJS (Node)
	    exports.UltraLoad = factory();
	  }
	})(typeof self !== "undefined" ? self : commonjsGlobal, function () {

	  // Private variables
	  let lottieLoaded = false;
	  let initialized = false;

	  // Default configuration
	  const defaults = {
	    target: "#ultraload",
	    text: "",
	    iconType: "default",
	    textAnimation: false,
	    progressBar: false,
	    progressPercentage: false,
	    duration: 3000,
	    theme: "light",
	    autoHide: true,
	    onComplete: null,
	    lottieUrl: null,
	    logoUrl: null,
	    ariaLabel: "Loading content",
	    ariaLive: "polite",
	    skipLink: false,
	  };

	  // Load Lottie library dynamically
	  function loadLottie(callback) {
	    if (typeof bodymovin === "undefined" && !lottieLoaded) {
	      const script = document.createElement("script");
	      script.src =
	        "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.4/lottie.min.js";
	      script.onload = function () {
	        lottieLoaded = true;
	        callback();
	      };
	      script.onerror = function () {
	        console.warn(
	          "UltraLoad: Lottie animation requested but loading failed"
	        );
	        callback();
	      };
	      document.head.appendChild(script);
	    } else if (typeof bodymovin !== "undefined") {
	      callback();
	    } else {
	      console.warn("UltraLoad: Lottie animation requested but loading failed");
	      callback();
	    }
	  }

	  // Helper function to get loader icon content
	  function getLoaderIconContent(iconType) {
	    if (typeof iconType !== "string") return "";

	    const icons = {
	      default: "",
	      "dots-circle": "",
	      wave: "<div></div><div></div><div></div><div></div><div></div>",
	      "cube-grid":
	        "<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>",
	      ring: "",
	      "bar-jump": "<div></div><div></div><div></div><div></div><div></div>",
	      "circle-bounce":
	        "<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>",
	      "dual-ring": "",
	      "folding-cube": "<div></div><div></div><div></div><div></div>",
	      chase: `
                        <div class="ultraload-icon-chase-dot"></div>
                        <div class="ultraload-icon-chase-dot"></div>
                        <div class="ultraload-icon-chase-dot"></div>
                        <div class="ultraload-icon-chase-dot"></div>
                        <div class="ultraload-icon-chase-dot"></div>
                        <div class="ultraload-icon-chase-dot"></div>
                    `,
	      "circle-dots": "<div></div><div></div><div></div><div></div>",
	      ellipsis: "<div></div><div></div><div></div><div></div>",
	      grid: "<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>",
	      hourglass: "",
	      "jelly-box": "<div></div><div></div><div></div><div></div>",
	      orbit: '<div class="ultraload-icon-orbit-inner"></div>',
	      pacman: "",
	      pulsar: "",
	      ripple: "<div></div><div></div>",
	      roller:
	        "<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>",
	      spinner: "<div></div><div></div><div></div>",
	      "square-spin": "",
	      swirl: "<div></div>",
	      timer: "",
	      wobble: "<div></div><div></div><div></div>",
	      zigzag: "<div></div><div></div><div></div><div></div>",
	      atom: "<div></div>",
	      infinity: "<div></div><div></div>",
	      metronome: "<div></div>",
	      moon: "",
	      "newton-cradle": "<div></div><div></div><div></div><div></div>",
	      pinwheel: "<div></div><div></div><div></div><div></div>",
	      radar: "<div></div>",
	      "revolving-dot": "<div></div><div></div><div></div><div></div>",
	      "scaling-squares": "<div></div><div></div><div></div><div></div>",
	      "semi-circle": "<div></div>",
	      "spinning-circles": "<div></div>",
	      spring: "<div></div><div></div><div></div><div></div>",
	      stretch: "<div></div>",
	      trefoil: "<div></div>",
	      "twin-circles": "<div></div><div></div>",
	      vortex: "<div></div>",
	      whirl: "<div></div>",
	      windmill: "<div></div><div></div><div></div><div></div>",
	      "yin-yang": "",
	      "zigzag-circle": "<div></div>",
	      dna: "<div></div><div></div><div></div><div></div>",
	      "ferris-wheel": "<div></div><div></div><div></div><div></div>",
	      galaxy: "<div></div><div></div><div></div><div></div>",
	      hyperspace: "<div></div>",
	      quantum: "<div></div><div></div><div></div><div></div>",
	    };

	    return icons[iconType] || "";
	  }

	  // Helper function to apply text animation
	  function applyTextAnimation(textEl, animationType, text) {
	    // Clear previous animations
	    textEl.className = "ultraload-text";
	    if (animationType) {
	      textEl.classList.add(`ultraload-animate-${animationType}`);
	    }

	    // Special handling for animations that need child elements
	    if (animationType === "wave") {
	      textEl.innerHTML = "";
	      const textContent = text || "";
	      textContent.split("").forEach((char) => {
	        const span = document.createElement("span");
	        span.textContent = char;
	        textEl.appendChild(span);
	      });
	    } else if (animationType === "dropping") {
	      textEl.innerHTML = "";
	      const words = (text || "").split(",");
	      words.forEach((word) => {
	        const div = document.createElement("div");
	        div.textContent = word;
	        textEl.appendChild(div);
	      });
	    } else {
	      textEl.textContent = text || "";
	    }
	  }

	  // Helper function to animate progress bar
	  function animateProgressBar(progressBarEl, progressPercentageEl, duration) {
	    let start = null;

	    const animate = (timestamp) => {
	      if (!start) start = timestamp;
	      const progress = Math.min((timestamp - start) / duration, 1);
	      progressBarEl.style.width = `${progress * 100}%`;

	      if (progressPercentageEl) {
	        progressPercentageEl.textContent = `${Math.round(progress * 100)}%`;
	      }

	      if (progress < 1) {
	        requestAnimationFrame(animate);
	      }
	    };

	    requestAnimationFrame(animate);
	  }

	  // Helper function to hide loader
	  function hideLoader(el, callback) {
	    const container = el.querySelector(".ultraload-container");
	    if (container) {
	      container.classList.add("ultraload-hide");
	      setTimeout(() => {
	        el.style.display = "none";
	        if (typeof callback === "function") {
	          callback();
	        } else if (typeof callback === "string") {
	          try {
	            new Function(callback)();
	          } catch (e) {
	            console.error("UltraLoad: Error executing onComplete callback:", e);
	          }
	        }
	      }, 500);
	    }
	  }

	  // Initialize the loader
	  function init(config) {
	    // Merge configs
	    const el =
	      typeof config?.target === "string"
	        ? document.querySelector(config.target)
	        : config?.target || document.querySelector(defaults.target);

	    if (!el) {
	      console.error("UltraLoad: Target element not found");
	      return;
	    }

	    const attrConfig = el.getAttribute("data-config");
	    const mergedConfig = {
	      ...defaults,
	      ...(attrConfig ? JSON.parse(attrConfig) : {}),
	      ...config,
	    };

	    // Create loader container if it doesn't exist
	    if (!el.querySelector(".ultraload-container")) {
	      el.innerHTML = `
                        <div class="ultraload-container ${
	                          mergedConfig.theme
	                            ? "ultraload-theme-" + mergedConfig.theme
	                            : ""
	                        }" 
                             aria-label="${mergedConfig.ariaLabel}" 
                             aria-live="${mergedConfig.ariaLive}">
                            <div class="ultraload-content">
                                ${
	                                  mergedConfig.logoUrl
	                                    ? `<img src="${mergedConfig.logoUrl}" class="ultraload-logo" alt="Logo" aria-hidden="true">`
	                                    : ""
	                                }
                                
                                ${
	                                  mergedConfig.lottieUrl
	                                    ? `<div class="ultraload-lottie-container" aria-hidden="true"></div>`
	                                    : mergedConfig.iconType !== false
	                                    ? `<div class="ultraload-icon ${
	                                        typeof mergedConfig.iconType ===
	                                        "string"
	                                          ? "ultraload-icon-" +
	                                            mergedConfig.iconType
	                                          : "ultraload-icon-default"
	                                      }" aria-hidden="true">
                                            ${getLoaderIconContent(
	                                              mergedConfig.iconType
	                                            )}
                                        </div>`
	                                    : ""
	                                }
                                
                                ${
	                                  mergedConfig.text !== false
	                                    ? `<div class="ultraload-text" data-text="${mergedConfig.text}">
                                        ${mergedConfig.text}
                                    </div>`
	                                    : ""
	                                }
                                
                                ${
	                                  mergedConfig.progressBar
	                                    ? `<div class="ultraload-progress" aria-hidden="true">
                                        <div class="ultraload-progress-bar"></div>
                                        ${
	                                          mergedConfig.progressPercentage
	                                            ? '<div class="ultraload-progress-percentage">0%</div>'
	                                            : ""
	                                        }
                                    </div>`
	                                    : ""
	                                }
                            </div>
                        </div>
                    `;
	    }

	    const containerEl = el.querySelector(".ultraload-container");
	    const textEl = el.querySelector(".ultraload-text");
	    const progressBarEl = el.querySelector(".ultraload-progress-bar");
	    const progressPercentageEl = el.querySelector(
	      ".ultraload-progress-percentage"
	    );
	    const lottieContainerEl = el.querySelector(".ultraload-lottie-container");

	    // Reset container
	    containerEl.classList.remove("ultraload-hide");
	    el.style.display = "block";

	    // Update aria attributes
	    containerEl.setAttribute("aria-label", mergedConfig.ariaLabel);
	    containerEl.setAttribute("aria-live", mergedConfig.ariaLive);

	    // Apply text animation
	    if (textEl && mergedConfig.textAnimation !== false) {
	      applyTextAnimation(textEl, mergedConfig.textAnimation, mergedConfig.text);
	    }

	    // Handle Lottie animation
	    if (mergedConfig.lottieUrl && lottieContainerEl) {
	      loadLottie(() => {
	        if (typeof bodymovin !== "undefined") {
	          bodymovin.loadAnimation({
	            container: lottieContainerEl,
	            renderer: "svg",
	            loop: true,
	            autoplay: true,
	            path: mergedConfig.lottieUrl,
	          });
	        }
	      });
	    }

	    // Handle progress bar
	    if (progressBarEl && mergedConfig.progressBar) {
	      animateProgressBar(
	        progressBarEl,
	        progressPercentageEl,
	        mergedConfig.duration
	      );
	    }

	    // Auto hide functionality
	    if (mergedConfig.autoHide) {
	      setTimeout(() => {
	        hideLoader(el, mergedConfig.onComplete);
	      }, mergedConfig.duration || 3000);
	    }

	    initialized = true;
	  }

	  // Public API
	  return {
	    init,
	    isInitialized: function () {
	      return initialized;
	    },

	    show: function (target = "#ultraload") {
	      const el =
	        typeof target === "string" ? document.querySelector(target) : target;
	      if (el) {
	        el.style.display = "block";
	        el.querySelector(".ultraload-container")?.classList.remove(
	          "ultraload-hide"
	        );
	      }
	    },

	    hide: function (target = "#ultraload", callback) {
	      const el =
	        typeof target === "string" ? document.querySelector(target) : target;
	      if (el) {
	        hideLoader(el, callback);
	      }
	    },

	    setProgress: function (percent, target = "#ultraload") {
	      const el =
	        typeof target === "string" ? document.querySelector(target) : target;
	      if (el) {
	        const progressBar = el.querySelector(".ultraload-progress-bar");
	        const progressPercentage = el.querySelector(
	          ".ultraload-progress-percentage"
	        );
	        if (progressBar) {
	          progressBar.style.width = `${Math.min(100, Math.max(0, percent))}%`;
	        }
	        if (progressPercentage) {
	          progressPercentage.textContent = `${Math.round(percent)}%`;
	        }
	      }
	    },

	    setText: function (text, target = "#ultraload") {
	      const el =
	        typeof target === "string" ? document.querySelector(target) : target;
	      if (el) {
	        const textEl = el.querySelector(".ultraload-text");
	        if (textEl) {
	          textEl.textContent = text;
	          textEl.setAttribute("data-text", text);
	        }
	      }
	    },

	    setAriaLabel: function (label, target = "#ultraload") {
	      const el =
	        typeof target === "string" ? document.querySelector(target) : target;
	      if (el) {
	        const container = el.querySelector(".ultraload-container");
	        if (container) {
	          container.setAttribute("aria-label", label);
	        }
	      }
	    },

	    // Framework-specific initialization
	    install: function (Vue) {
	      Vue.component("ultraload", {
	        props: {
	          config: {
	            type: Object,
	            default: () => ({}),
	          },
	        },
	        mounted() {
	          UltraLoad.init({
	            target: this.$el,
	            ...this.config,
	          });
	        },
	        render(h) {
	          return h("div", {
	            attrs: {
	              "data-loader": "ultraload",
	            },
	          });
	        },
	      });
	    },

	    // React component
	    ReactComponent: function (props) {
	      const { config, ...rest } = props || {};
	      const ref = React.useRef(null);

	      React.useEffect(() => {
	        UltraLoad.init({
	          target: ref.current,
	          ...config,
	        });

	        return () => {
	          // Cleanup if needed
	        };
	      }, [config]);

	      return React.createElement("div", {
	        ref: ref,
	        "data-loader": "ultraload",
	        ...rest,
	      });
	    },
	  };
	});

	// Auto-initialize when DOM is ready
	if (document.readyState !== "loading") {
	  initializeLoaders();
	} else {
	  document.addEventListener("DOMContentLoaded", initializeLoaders);
	}

	function initializeLoaders() {
	  // Auto-initialize all loaders with data-loader attribute
	  document.querySelectorAll('[data-loader="ultraload"]').forEach((el) => {
	    if (el.style.display !== "none") {
	      UltraLoad.init({ target: el });
	    }
	  });
	}
} (ultraload$1, ultraloadExports));

var ultraload = ultraloadExports;

export { ultraload as default };
//# sourceMappingURL=ultraload.esm.js.map
