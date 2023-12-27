import * as React from "react"
const SvgTheme = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="#1E3050"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      d="M448 256c0-106-86-192-192-192v384c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0z"
    />
  </svg>
)
export default SvgTheme
