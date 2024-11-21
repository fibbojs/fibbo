export class Navbar {
  private __DOM__: HTMLElement
  private __DOM_TOGGLE__: HTMLElement

  constructor() {
    // Create the navbar
    this.__DOM__ = document.createElement('nav')
    this.__DOM__.id = 'demo-navbar'
    this.__DOM__.innerHTML = `
    <a href="/playground-2d/">Home</a>
    <a href="/playground-2d/demos/squairbows/">Squairbows</a>
    <a href="/playground-2d/demos/perlin-rainbow/">Perlin Rainbow</a>
    <style>
      #demo-navbar {
        position: fixed;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        width: 180px;
        height: 90vh;
        background-color: rgba(0, 0, 0, 0.6);
        color: white;
        border-radius: 0 10px 10px 0;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
      }
      #demo-navbar a {
        width: 100%;
        color: white;
        padding: 0.5rem 1rem;
        text-decoration: none;
        background-color: transparent;
        transition: background-color 0.3s ease;
      }
      #demo-navbar a:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }

      /* Gets applied if supported only */
      @supports (
        (-webkit-backdrop-filter: blur(8px)) or (backdrop-filter: blur(8px))
      ) {
        #demo-navbar {
          background-color: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
      }
    </style>
    `

    // Create the toggle button
    this.__DOM_TOGGLE__ = document.createElement('div')
    this.__DOM_TOGGLE__.id = 'demo-navbar-toggle'
    this.__DOM_TOGGLE__.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="-5 -7 24 24"><path fill="currentColor" d="M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2m7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2M1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2"/></svg>
    <style>
      #demo-navbar-toggle {
        position: absolute;
        top: 1rem;
        left: 1rem;
        width: 2rem;
        height: 2rem;
        background-color: rgba(0, 0, 0, 0.6);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
      }
      #demo-navbar-toggle svg {
        width: 1.5rem;
        height: 1.5rem;
        fill: white;
      }
      #demo-navbar-toggle:focus {
        outline: none;
      }
    </style>
    `
    let toggle = false
    this.__DOM_TOGGLE__.addEventListener('click', () => {
      this.__DOM__.style.transform = toggle ? 'translateX(-100%)' : 'translateX(0)'
      toggle = !toggle
    })

    document.body.appendChild(this.__DOM__)
    document.body.appendChild(this.__DOM_TOGGLE__)
  }
}
