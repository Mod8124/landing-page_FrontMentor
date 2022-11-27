import "./style.css";

document.querySelector("#app").innerHTML = `
     <main class="wrapper">
      <section class="lgo">
        <div id="lgo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="264px"
            height="49pt"
            viewBox="0 0 198 49"
          >
            <g fill="#fff">
              <path
                d="M31.184 10.285c-5.91-.004-12.075 1.328-18.301 3.055-.79.16-1.563.676-1.969 1.316-.375.602-.512 1.207-.629 1.844-.605 3.387-.531 6.715-.406 10.398.027.844.156 1.848.547 2.454.414.613 1.117 1.003 1.96 1.132 1.083.164 2.16.29 3.239.403l-.238 6.656c-.04.527.222.969.543 1.223.289.218.61.316.937.34.656.05 1.43-.235 1.813-.961 1.68-3.235 2.734-4.66 4.832-6.81 5.48.138 10.261-.167 15.672-.57 1.914-.046 3.23-1.613 3.578-2.863 1.035-3.238 1.199-7.234 1.308-11.277.047-1.602-.508-3.172-1.492-4.004-.937-.758-2.066-1.031-3.105-1.312-2.883-.653-5.766-1.004-8.29-1.024zm7.875 2.531c1.039.282 1.957.555 2.53 1.024.966 1.023.934 1.707.923 2.812-.11 3.918-.297 7.723-1.184 10.606-.383 1.074-1.043 1.84-2.3 1.953-5.516.41-10.301.727-15.844.566a.792.792 0 0 0-.582.23c-2.329 2.352-3.52 3.99-5.297 7.407-.04.078-.13.125-.242.133-.07-.004-.102-.063-.106-.113l.238-7.22a.804.804 0 0 0-.695-.8 73.176 73.176 0 0 1-3.871-.477c-.555-.082-.758-.234-.91-.46-.266-.633-.262-1.024-.281-1.63-.126-3.656-.184-6.847.374-10.023.055-.472.231-.953.418-1.351.31-.485.782-.555 1.258-.688 6.086-1.68 12.04-2.937 17.649-2.941 2.75.097 5.633.375 7.922.972zm-21.024 6.192c-.84 1.004-.758 2.367-.11 3.281.34.48.868.863 1.509.95.836.07 1.367-.27 1.937-.657 1.035-.898 1.14-2.469.352-3.605a2.184 2.184 0 0 0-1.696-.946c-.898.008-1.507.407-1.992.977zm9.07-.82c-.835.027-1.511.605-1.925 1.23-.47.71-.746 1.605-.364 2.484.735 1.684 3.274 1.664 4.286-.05.464-.79.347-1.688 0-2.336-.348-.653-.872-1.184-1.633-1.305a1.934 1.934 0 0 0-.364-.023zm7.364.156a2.895 2.895 0 0 0-.778.086c-1.004.27-1.859 1.304-1.73 2.629.066.668.371 1.32.926 1.765.554.45 1.355.649 2.203.477.972-.2 1.578-.985 1.777-1.742.203-.758.153-1.528-.316-2.153a2.655 2.655 0 0 0-2.082-1.062zM19.96 19.586c.184.004.332.062.484.281.34.492.246 1.235-.097 1.535-.34.297-.555.325-.707.305-.149-.023-.301-.125-.438-.316-.258-.368-.336-.961.008-1.387.18-.242.516-.395.75-.418zm7.254.172c.027.004.355.195.512.488.156.293.183.563.035.813-.442.75-1.38.546-1.52.222-.055-.125-.015-.625.242-1.011.258-.391.578-.536.73-.512zm8.082.57c.047.067.164.492.074.828-.09.34-.238.547-.598.621-.46.098-.718 0-.914-.156-.191-.156-.324-.422-.351-.707-.07-.703.183-.867.586-.973.465-.117.992.086 1.203.387zm0 0M53.867 13.434a.892.892 0 0 1 .219-.536.665.665 0 0 1 .535-.238h5.223c.176 0 .36.074.547.219a.68.68 0 0 1 .28.555v8.336h8.74v-8.336a.768.768 0 0 1 .793-.773h5.151c.235 0 .438.058.614.175.176.117.265.305.265.562V38c0 .258-.078.45-.23.578-.152.129-.352.195-.598.195h-5.203a.845.845 0 0 1-.574-.195c-.145-.129-.219-.32-.219-.578v-9.988h-8.738V38c0 .246-.078.438-.238.57-.157.137-.371.203-.641.203h-5.172c-.492 0-.742-.23-.754-.687zm48.11 25.039a1.1 1.1 0 0 1-.485.246 2.422 2.422 0 0 1-.484.054h-2.656c-.211 0-.391-.039-.543-.113a1.197 1.197 0 0 1-.387-.308 1.842 1.842 0 0 1-.266-.442 3.71 3.71 0 0 1-.176-.508l-.543-2.25c-.175.364-.433.774-.765 1.239a6.65 6.65 0 0 1-1.274 1.3 7.077 7.077 0 0 1-1.847 1.02c-.715.277-1.535.414-2.461.414-1.336 0-2.55-.258-3.64-.773a8.372 8.372 0 0 1-2.79-2.11c-.765-.89-1.36-1.933-1.781-3.12a11.327 11.327 0 0 1-.633-3.81V17.797c0-.445.094-.785.29-1.012.19-.23.5-.344.921-.344h4.063c.503 0 .847.086 1.039.254.187.172.28.5.28.996v11.446c0 .504.114.98.34 1.433a4.282 4.282 0 0 0 2.18 2.012c.477.2.961.3 1.454.3.421 0 .859-.1 1.308-.3.453-.2.867-.465 1.25-.797.379-.336.695-.73.942-1.18.246-.453.367-.93.367-1.433v-11.43c0-.199.039-.398.113-.597a.963.963 0 0 1 .344-.457c.152-.094.297-.16.43-.196.136-.035.292-.05.468-.05h3.973c.504 0 .867.12 1.09.367.222.246.336.578.336.988v19.676c0 .222-.051.425-.153.613a1.091 1.091 0 0 1-.41.441zm20.414-2.426c-.317.316-.668.656-1.047 1.02-.383.363-.801.703-1.258 1.019-.457.316-.95.578-1.477.785a4.714 4.714 0 0 1-1.707.305c-1.593 0-3.062-.297-4.402-.895a10.537 10.537 0 0 1-3.465-2.453c-.969-1.039-1.722-2.262-2.27-3.668-.542-1.406-.816-2.918-.816-4.535 0-1.629.274-3.145.817-4.547.546-1.398 1.3-2.617 2.27-3.656a10.403 10.403 0 0 1 3.464-2.445c1.34-.59 2.809-.887 4.402-.887a5.32 5.32 0 0 1 1.77.281 6.49 6.49 0 0 1 1.457.719c.441.297.844.625 1.215.996.367.367.719.73 1.047 1.082v-8.04c0-.374.113-.69.34-.948.23-.258.574-.387 1.03-.387h3.958c.152 0 .312.035.48.098.172.066.328.156.469.273.14.117.254.258.34.422.09.164.133.344.133.543v26.289c0 .902-.473 1.355-1.422 1.355h-3.45c-.234 0-.414-.03-.542-.09a.826.826 0 0 1-.325-.253 1.64 1.64 0 0 1-.238-.422c-.07-.168-.16-.367-.266-.59zm-10.114-8.422c0 .773.121 1.496.364 2.172a5.142 5.142 0 0 0 1.027 1.75c.445.492.98.883 1.61 1.168.624.289 1.32.43 2.081.43.75 0 1.457-.133 2.121-.403.66-.27 1.239-.64 1.73-1.117a5.616 5.616 0 0 0 1.188-1.68 5.541 5.541 0 0 0 .5-2.074v-.246c0-.75-.14-1.465-.421-2.145a5.712 5.712 0 0 0-1.168-1.793 5.555 5.555 0 0 0-1.758-1.222 5.326 5.326 0 0 0-2.192-.45c-.761 0-1.457.15-2.082.45a4.827 4.827 0 0 0-1.609 1.223 5.497 5.497 0 0 0-1.027 1.792 6.341 6.341 0 0 0-.364 2.145zm37.278 8.422c-.317.316-.664.656-1.047 1.02-.38.363-.797.703-1.254 1.019-.457.316-.95.578-1.48.785a4.693 4.693 0 0 1-1.704.305c-1.593 0-3.062-.297-4.406-.895a10.561 10.561 0 0 1-3.46-2.453c-.97-1.039-1.727-2.262-2.27-3.668-.547-1.406-.817-2.918-.817-4.535 0-1.629.27-3.145.817-4.547a11.299 11.299 0 0 1 2.27-3.656 10.427 10.427 0 0 1 3.46-2.445c1.344-.59 2.813-.887 4.406-.887.645 0 1.235.094 1.766.281a6.52 6.52 0 0 1 1.46.719c.438.297.845.625 1.212.996.37.367.719.73 1.047 1.082v-8.04c0-.374.117-.69.343-.948.23-.258.57-.387 1.028-.387h3.957c.152 0 .312.035.484.098.168.066.324.156.465.273.14.117.258.258.344.422.09.164.133.344.133.543v26.289c0 .902-.477 1.355-1.426 1.355h-3.446c-.234 0-.417-.03-.546-.09a.855.855 0 0 1-.325-.253 1.764 1.764 0 0 1-.238-.422c-.07-.168-.156-.367-.262-.59zm-10.11-8.422c0 .773.121 1.496.36 2.172a5.214 5.214 0 0 0 1.03 1.75c.446.492.981.883 1.606 1.168.63.289 1.325.43 2.086.43a5.55 5.55 0 0 0 2.118-.403 5.36 5.36 0 0 0 1.734-1.117 5.616 5.616 0 0 0 1.187-1.68 5.541 5.541 0 0 0 .5-2.074v-.246a5.656 5.656 0 0 0-1.594-3.938 5.468 5.468 0 0 0-1.757-1.222 5.295 5.295 0 0 0-2.188-.45c-.761 0-1.457.15-2.086.45a4.851 4.851 0 0 0-1.605 1.223 5.577 5.577 0 0 0-1.031 1.792 6.436 6.436 0 0 0-.36 2.145zm21.54-16.477c0-.375.093-.691.28-.949.188-.258.512-.386.97-.386h4.308c.117 0 .238.03.367.097.13.063.25.152.36.27.113.117.207.258.28.422.079.164.118.347.118.546v26.27c0 .445-.129.785-.379 1.012-.254.23-.578.343-.976.343h-4.079c-.457 0-.78-.113-.968-.343-.188-.227-.282-.567-.282-1.012zm29.609 24.954a11.67 11.67 0 0 1-3.48 2.222c-1.29.535-2.657.801-4.098.801-1.606 0-3.121-.293-4.551-.879a11.8 11.8 0 0 1-3.766-2.437 11.656 11.656 0 0 1-2.566-3.664c-.633-1.407-.95-2.938-.95-4.59 0-1.032.126-2.032.38-3 .25-.965.609-1.871 1.07-2.715a11.743 11.743 0 0 1 1.687-2.332 10.792 10.792 0 0 1 4.899-2.996c.96-.282 1.976-.422 3.043-.422.972 0 1.914.129 2.832.387a11.04 11.04 0 0 1 4.781 2.777 11.35 11.35 0 0 1 1.723 2.156c.48.777.851 1.61 1.117 2.496.262.883.394 1.797.394 2.735 0 .609-.007 1.105-.027 1.492-.016.387-.105.695-.27.926-.164.226-.437.386-.82.472-.379.09-.941.133-1.68.133h-12.66c.118.75.356 1.379.715 1.883.356.504.77.906 1.238 1.203.47.3.97.512 1.497.64a6.294 6.294 0 0 0 1.492.196c.422 0 .855-.043 1.3-.133a8.748 8.748 0 0 0 1.293-.351 7.331 7.331 0 0 0 1.145-.508c.344-.196.625-.399.836-.61.187-.152.348-.265.48-.34a.86.86 0 0 1 .434-.117c.152 0 .309.055.465.16.16.106.336.258.535.458l1.863 2.109c.13.152.211.289.246.414.036.121.055.25.055.379a.977.977 0 0 1-.195.605c-.13.168-.281.32-.457.45zm-8.457-14.649c-.457 0-.899.09-1.328.274-.426.18-.829.421-1.204.726a6.37 6.37 0 0 0-1.011 1.04 6.486 6.486 0 0 0-.73 1.179h8.988a10.599 10.599 0 0 0-.801-1.266 5.564 5.564 0 0 0-.985-1.023 4.295 4.295 0 0 0-1.265-.684c-.477-.164-1.031-.246-1.664-.246zm0 0"
              />
            </g>
          </svg>
        </div>
      </section>

      <section class="bc">
        <div id="bc">
          <svg
            width="709"
            height="506"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <rect id="b" width="657.638" height="410.833" rx="13.701" />
              <filter
                x="-1.6%"
                y="-2.6%"
                width="103.2%"
                height="105.1%"
                filterUnits="objectBoundingBox"
                id="a"
              >
                <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
                <feGaussianBlur
                  stdDeviation="3.5"
                  in="shadowOffsetOuter1"
                  result="shadowBlurOuter1"
                />
                <feColorMatrix
                  values="0 0 0 0 0 0 0 0 0 0.145098039 0 0 0 0 0.180392157 0 0 0 0.181838768 0"
                  in="shadowBlurOuter1"
                />
              </filter>
              <path
                d="M13.7 0h630.237c7.567 0 13.7 6.134 13.7 13.7v30.122H0V13.701C0 6.134 6.134 0 13.7 0z"
                id="d"
              />
              <filter
                x="-1.6%"
                y="-24%"
                width="103.2%"
                height="147.9%"
                filterUnits="objectBoundingBox"
                id="c"
              >
                <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
                <feGaussianBlur
                  stdDeviation="3.5"
                  in="shadowOffsetOuter1"
                  result="shadowBlurOuter1"
                />
                <feColorMatrix
                  values="0 0 0 0 0 0 0 0 0 0.145098039 0 0 0 0 0.180392157 0 0 0 0.181838768 0"
                  in="shadowBlurOuter1"
                />
              </filter>
              <linearGradient
                x1="14.811%"
                y1="-22.362%"
                x2="75.996%"
                y2="119.406%"
                id="e"
              >
                <stop stop-color="#FAD961" offset="0%" />
                <stop stop-color="#FF52C1" offset="100%" />
              </linearGradient>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="f">
                <stop stop-color="#00C7FA" offset="0%" />
                <stop stop-color="#007DFA" offset="100%" />
              </linearGradient>
              <linearGradient
                x1="28.973%"
                y1="0%"
                x2="90.2%"
                y2="111.244%"
                id="g"
              >
                <stop stop-color="#FF52C1" offset="0%" />
                <stop stop-color="#9952FF" offset="100%" />
              </linearGradient>
              <path
                d="M11.691 0h195.83c6.457 0 11.692 5.234 11.692 11.691v327.195c0 6.457-5.235 11.692-11.692 11.692H11.691C5.234 350.578 0 345.343 0 338.886V11.691C0 5.234 5.234 0 11.691 0z"
                id="i"
              />
              <filter
                x="-4.1%"
                y="-2.6%"
                width="108.2%"
                height="105.1%"
                filterUnits="objectBoundingBox"
                id="h"
              >
                <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
                <feGaussianBlur
                  stdDeviation="3"
                  in="shadowOffsetOuter1"
                  result="shadowBlurOuter1"
                />
                <feColorMatrix
                  values="0 0 0 0 0 0 0 0 0 0.145098039 0 0 0 0 0.180392157 0 0 0 0.181838768 0"
                  in="shadowBlurOuter1"
                />
              </filter>
              <path
                d="M11.691 0h195.83c6.457 0 11.692 5.234 11.692 11.691v25.704H0V11.691C0 5.234 5.234 0 11.691 0z"
                id="k"
              />
              <filter
                x="-4.1%"
                y="-24.1%"
                width="108.2%"
                height="148.1%"
                filterUnits="objectBoundingBox"
                id="j"
              >
                <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
                <feGaussianBlur
                  stdDeviation="3"
                  in="shadowOffsetOuter1"
                  result="shadowBlurOuter1"
                />
                <feColorMatrix
                  values="0 0 0 0 0 0 0 0 0 0.145098039 0 0 0 0 0.180392157 0 0 0 0.181838768 0"
                  in="shadowBlurOuter1"
                />
              </filter>
            </defs>
            <g fill="none" fill-rule="evenodd">
              <g transform="translate(7 7)">
                <use fill="#000" filter="url(#a)" xlink:href="#b" />
                <use fill="#FFF" xlink:href="#b" />
                <use fill="#000" filter="url(#c)" xlink:href="#d" />
                <use fill="#00252E" xlink:href="#d" />
                <rect
                  fill="#E1E8EE"
                  x="49.323"
                  y="13.694"
                  width="137.008"
                  height="16.433"
                  rx="3.425"
                />
                <g transform="translate(591.874 15.064)" fill="#D8D8D8">
                  <rect width="21.921" height="2.739" rx="1.369" />
                  <rect y="5.478" width="21.921" height="2.739" rx="1.369" />
                  <rect y="10.956" width="21.921" height="2.739" rx="1.369" />
                </g>
                <g transform="translate(49.323 94.492)">
                  <ellipse
                    fill="url(#e)"
                    cx="32.882"
                    cy="32.867"
                    rx="32.882"
                    ry="32.867"
                  />
                  <g transform="translate(104.126 8.217)" fill="#E1E8EE">
                    <rect width="78.78" height="10.956" rx="2.055" />
                    <rect
                      y="21.911"
                      width="274.016"
                      height="5.478"
                      rx="2.055"
                    />
                    <rect
                      y="32.867"
                      width="251.181"
                      height="5.478"
                      rx="2.055"
                    />
                    <rect
                      y="43.822"
                      width="228.346"
                      height="5.478"
                      rx="2.055"
                    />
                  </g>
                  <g transform="translate(411.024 24.65)" fill="#A7B9C8">
                    <ellipse cx="8.22" cy="8.217" rx="8.22" ry="8.217" />
                    <ellipse cx="52.063" cy="8.217" rx="8.22" ry="8.217" />
                    <ellipse cx="30.142" cy="8.217" rx="8.22" ry="8.217" />
                    <ellipse cx="73.984" cy="8.217" rx="8.22" ry="8.217" />
                    <ellipse cx="95.906" cy="8.217" rx="8.22" ry="8.217" />
                  </g>
                </g>
                <g transform="translate(49.323 187.614)">
                  <ellipse
                    fill="url(#f)"
                    cx="30.827"
                    cy="30.813"
                    rx="30.827"
                    ry="30.813"
                  />
                  <g transform="translate(102.07 6.162)" fill="#E1E8EE">
                    <rect width="78.78" height="10.956" rx="2.055" />
                    <rect
                      y="21.911"
                      width="274.016"
                      height="5.478"
                      rx="2.055"
                    />
                    <rect
                      y="32.867"
                      width="251.181"
                      height="5.478"
                      rx="2.055"
                    />
                    <rect
                      y="43.822"
                      width="228.346"
                      height="5.478"
                      rx="2.055"
                    />
                  </g>
                  <g transform="translate(408.969 22.596)" fill="#A7B9C8">
                    <ellipse cx="8.22" cy="8.217" rx="8.22" ry="8.217" />
                    <ellipse cx="52.063" cy="8.217" rx="8.22" ry="8.217" />
                    <ellipse cx="30.142" cy="8.217" rx="8.22" ry="8.217" />
                  </g>
                </g>
                <g transform="translate(49.323 285.53)">
                  <ellipse
                    fill="url(#g)"
                    cx="30.827"
                    cy="30.813"
                    rx="30.827"
                    ry="30.813"
                  />
                  <g transform="translate(102.07 6.162)" fill="#E1E8EE">
                    <rect width="78.78" height="10.956" rx="2.055" />
                    <rect
                      y="21.911"
                      width="274.016"
                      height="5.478"
                      rx="2.055"
                    />
                    <rect
                      y="32.867"
                      width="251.181"
                      height="5.478"
                      rx="2.055"
                    />
                    <rect
                      y="43.822"
                      width="228.346"
                      height="5.478"
                      rx="2.055"
                    />
                  </g>
                  <g transform="translate(408.969 22.596)" fill="#A7B9C8">
                    <ellipse cx="8.22" cy="8.217" rx="8.22" ry="8.217" />
                    <ellipse cx="52.063" cy="8.217" rx="8.22" ry="8.217" />
                    <ellipse cx="30.142" cy="8.217" rx="8.22" ry="8.217" />
                    <ellipse cx="73.984" cy="8.217" rx="8.22" ry="8.217" />
                  </g>
                </g>
              </g>
              <g transform="translate(483.787 149.422)">
                <use fill="#000" filter="url(#h)" xlink:href="#i" />
                <use fill="#FFF" xlink:href="#i" />
              </g>
              <g transform="translate(483.787 149.422)">
                <use fill="#000" filter="url(#j)" xlink:href="#k" />
                <use fill="#00252E" xlink:href="#k" />
              </g>
              <g transform="translate(505.8 162.277)">
                <rect
                  fill="#E1E8EE"
                  width="71.244"
                  height="14.023"
                  rx="2.923"
                />
                <g transform="translate(155.111 1.169)" fill="#D8D8D8">
                  <rect width="18.706" height="2.337" rx="1.169" />
                  <rect y="4.674" width="18.706" height="2.337" rx="1.169" />
                  <rect y="9.349" width="18.706" height="2.337" rx="1.169" />
                </g>
              </g>
              <g transform="translate(505.709 223.372)">
                <ellipse
                  fill="url(#e)"
                  cx="10.276"
                  cy="10.271"
                  rx="10.276"
                  ry="10.271"
                />
                <g transform="translate(31.512 2.054)" fill="#E1E8EE">
                  <rect width="39.39" height="3.652" rx=".63" />
                  <rect y="7.304" width="137.008" height="1.826" rx=".63" />
                  <rect y="10.956" width="125.591" height="1.826" rx=".63" />
                  <rect y="14.607" width="114.173" height="1.826" rx=".63" />
                </g>
              </g>
              <g transform="translate(505.709 317.864)">
                <ellipse
                  fill="url(#e)"
                  cx="10.276"
                  cy="10.271"
                  rx="10.276"
                  ry="10.271"
                />
                <g transform="translate(31.512 2.054)" fill="#E1E8EE">
                  <rect width="39.39" height="3.652" rx=".63" />
                  <rect y="7.304" width="137.008" height="1.826" rx=".63" />
                  <rect y="10.956" width="125.591" height="1.826" rx=".63" />
                  <rect y="14.607" width="114.173" height="1.826" rx=".63" />
                </g>
              </g>
              <g transform="translate(505.709 254.87)">
                <g transform="translate(31.512 2.054)" fill="#E1E8EE">
                  <rect width="39.39" height="3.652" rx=".63" />
                  <rect y="7.304" width="137.008" height="1.826" rx=".63" />
                  <rect y="10.956" width="125.591" height="1.826" rx=".63" />
                  <rect y="14.607" width="114.173" height="1.826" rx=".63" />
                </g>
                <ellipse
                  fill="url(#f)"
                  cx="10.276"
                  cy="10.271"
                  rx="10.276"
                  ry="10.271"
                />
              </g>
              <g transform="translate(505.709 349.361)">
                <g transform="translate(31.512 2.054)" fill="#E1E8EE">
                  <rect width="39.39" height="3.652" rx=".63" />
                  <rect y="7.304" width="137.008" height="1.826" rx=".63" />
                  <rect y="10.956" width="125.591" height="1.826" rx=".63" />
                  <rect y="14.607" width="114.173" height="1.826" rx=".63" />
                </g>
                <ellipse
                  fill="url(#f)"
                  cx="10.276"
                  cy="10.271"
                  rx="10.276"
                  ry="10.271"
                />
              </g>
              <g transform="translate(505.709 286.367)">
                <g transform="translate(31.512 2.054)" fill="#E1E8EE">
                  <rect width="39.39" height="3.652" rx=".63" />
                  <rect y="7.304" width="137.008" height="1.826" rx=".63" />
                  <rect y="10.956" width="125.591" height="1.826" rx=".63" />
                  <rect y="14.607" width="114.173" height="1.826" rx=".63" />
                </g>
                <ellipse
                  fill="url(#g)"
                  cx="10.276"
                  cy="10.271"
                  rx="10.276"
                  ry="10.271"
                />
              </g>
              <g transform="translate(505.709 380.858)">
                <g transform="translate(31.512 2.054)" fill="#E1E8EE">
                  <rect width="39.39" height="3.652" rx=".63" />
                  <rect y="7.304" width="137.008" height="1.826" rx=".63" />
                  <rect y="10.956" width="125.591" height="1.826" rx=".63" />
                  <rect y="14.607" width="114.173" height="1.826" rx=".63" />
                </g>
                <ellipse
                  fill="url(#g)"
                  cx="10.276"
                  cy="10.271"
                  rx="10.276"
                  ry="10.271"
                />
              </g>
              <g transform="translate(505.709 412.356)">
                <ellipse
                  fill="url(#e)"
                  cx="10.276"
                  cy="10.271"
                  rx="10.276"
                  ry="10.271"
                />
                <g transform="translate(31.512 2.054)" fill="#E1E8EE">
                  <rect width="39.39" height="3.652" rx=".63" />
                  <rect y="7.304" width="137.008" height="1.826" rx=".63" />
                  <rect y="10.956" width="125.591" height="1.826" rx=".63" />
                  <rect y="14.607" width="114.173" height="1.826" rx=".63" />
                </g>
              </g>
              <g transform="translate(505.709 443.853)">
                <g transform="translate(31.512 2.054)" fill="#E1E8EE">
                  <rect width="39.39" height="3.652" rx=".63" />
                  <rect y="7.304" width="137.008" height="1.826" rx=".63" />
                  <rect y="10.956" width="125.591" height="1.826" rx=".63" />
                  <rect y="14.607" width="114.173" height="1.826" rx=".63" />
                </g>
                <ellipse
                  fill="url(#f)"
                  cx="10.276"
                  cy="10.271"
                  rx="10.276"
                  ry="10.271"
                />
              </g>
            </g>
          </svg>
        </div>
        <div id="bcHidden">
          <svg
            id="Capa_1"
            data-name="Capa 1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 366 270"
          >
            <defs>
              <filter
                id="a"
                x="-1.6"
                y="-2.6"
                width="103.2"
                height="105.1"
                name="a"
              >
                <feOffset result="shadowOffsetOuter1" in="SourceAlpha" />
                <feGaussianBlur
                  result="shadowBlurOuter1"
                  stdDeviation="3.5"
                  in="shadowOffsetOuter1"
                />
              </filter>
              <filter
                id="c"
                x="-1.6"
                y="-24"
                width="103.2"
                height="147.9"
                name="c"
              >
                <feOffset result="shadowOffsetOuter1" in="SourceAlpha" />
                <feGaussianBlur
                  result="shadowBlurOuter1"
                  stdDeviation="3.5"
                  in="shadowOffsetOuter1"
                />
              </filter>
              <linearGradient
                id="Degradado_sin_nombre"
                x1="-86.94"
                y1="67.22"
                x2="-86.63"
                y2="66.5"
                gradientTransform="matrix(65.76, 0, 0, -65.73, 5755.55, 4472.67)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#fad961" />
                <stop offset="1" stop-color="#ff52c1" />
              </linearGradient>
              <linearGradient
                id="Degradado_sin_nombre_2"
                x1="-86.71"
                y1="67.85"
                x2="-86.71"
                y2="67.34"
                gradientTransform="matrix(61.65, 0, 0, -61.63, 5393.87, 4290.56)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#00c7fa" />
                <stop offset="1" stop-color="#007dfa" />
              </linearGradient>
              <linearGradient
                id="Degradado_sin_nombre_3"
                x1="-86.84"
                y1="68.62"
                x2="-86.53"
                y2="68.06"
                gradientTransform="matrix(61.65, 0, 0, -61.63, 5393.87, 4388.47)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#ff52c1" />
                <stop offset="1" stop-color="#9952ff" />
              </linearGradient>
              <filter
                id="h"
                x="-4.1"
                y="-2.6"
                width="108.2"
                height="105.1"
                name="h"
              >
                <feOffset result="shadowOffsetOuter1" in="SourceAlpha" />
                <feGaussianBlur
                  result="shadowBlurOuter1"
                  stdDeviation="3"
                  in="shadowOffsetOuter1"
                />
              </filter>
              <filter
                id="j"
                x="-4.1"
                y="-24.1"
                width="108.2"
                height="148.1"
                name="j"
              >
                <feOffset result="shadowOffsetOuter1" in="SourceAlpha" />
                <feGaussianBlur
                  result="shadowBlurOuter1"
                  stdDeviation="3"
                  in="shadowOffsetOuter1"
                />
              </filter>
              <linearGradient
                id="Degradado_sin_nombre_4"
                x1="-95.58"
                y1="70.36"
                x2="-95.27"
                y2="69.64"
                gradientTransform="matrix(20.55, 0, 0, -20.54, 2226.29, 1566.69)"
                xlink:href="#Degradado_sin_nombre"
              />
              <linearGradient
                id="Degradado_sin_nombre_5"
                x1="-95.58"
                y1="72.63"
                x2="-95.27"
                y2="71.91"
                gradientTransform="matrix(20.55, 0, 0, -20.54, 2226.29, 1661.18)"
                xlink:href="#Degradado_sin_nombre"
              />
              <linearGradient
                id="Degradado_sin_nombre_6"
                x1="-95.42"
                y1="71"
                x2="-95.42"
                y2="70.49"
                gradientTransform="matrix(20.55, 0, 0, -20.54, 2226.29, 1598.18)"
                xlink:href="#Degradado_sin_nombre_2"
              />
              <linearGradient
                id="Degradado_sin_nombre_7"
                x1="-95.42"
                y1="73.27"
                x2="-95.42"
                y2="72.76"
                gradientTransform="matrix(20.55, 0, 0, -20.54, 2226.29, 1692.67)"
                xlink:href="#Degradado_sin_nombre_2"
              />
              <linearGradient
                id="Degradado_sin_nombre_8"
                x1="-95.55"
                y1="71.74"
                x2="-95.24"
                y2="71.18"
                gradientTransform="matrix(20.55, 0, 0, -20.54, 2226.29, 1629.68)"
                xlink:href="#Degradado_sin_nombre_3"
              />
              <linearGradient
                id="Degradado_sin_nombre_9"
                x1="-95.55"
                y1="74.01"
                x2="-95.24"
                y2="73.44"
                gradientTransform="matrix(20.55, 0, 0, -20.54, 2226.29, 1724.17)"
                xlink:href="#Degradado_sin_nombre_3"
              />
              <linearGradient
                id="Degradado_sin_nombre_10"
                x1="-95.58"
                y1="74.9"
                x2="-95.27"
                y2="74.18"
                gradientTransform="matrix(20.55, 0, 0, -20.54, 2226.29, 1755.67)"
                xlink:href="#Degradado_sin_nombre"
              />
              <linearGradient
                id="Degradado_sin_nombre_11"
                x1="-95.42"
                y1="75.53"
                x2="-95.42"
                y2="75.03"
                gradientTransform="matrix(20.55, 0, 0, -20.54, 2226.29, 1787.17)"
                xlink:href="#Degradado_sin_nombre_2"
              />
            </defs>
            <title>illustration-mockupsmobile</title>
            <g style="filter: url(#a)">
              <rect
                id="b"
                x="7.17"
                y="14.08"
                width="333.39"
                height="208.27"
                rx="6.95"
              />
            </g>
            <rect
              x="7.17"
              y="14.08"
              width="333.39"
              height="208.27"
              rx="6.95"
              style="fill: #fff"
            />
            <g style="filter: url(#c)">
              <path
                id="d"
                d="M14.11,14.08h319.5A6.94,6.94,0,0,1,340.55,21V36.29H7.17V21A6.94,6.94,0,0,1,14.11,14.08Z"
                style="fill-rule: evenodd"
              />
            </g>
            <path
              d="M14.11,14.08h319.5A6.94,6.94,0,0,1,340.55,21V36.29H7.17V21A6.94,6.94,0,0,1,14.11,14.08Z"
              style="fill: #00252e; fill-rule: evenodd"
            />
            <rect
              x="32.17"
              y="21.02"
              width="69.46"
              height="8.33"
              rx="1.74"
              style="fill: #e1e8ee"
            />
            <rect
              x="307.21"
              y="21.71"
              width="11.11"
              height="1.39"
              rx="0.69"
              style="fill: #d8d8d8"
            />
            <rect
              x="307.21"
              y="24.49"
              width="11.11"
              height="1.39"
              rx="0.69"
              style="fill: #d8d8d8"
            />
            <rect
              x="307.21"
              y="27.27"
              width="11.11"
              height="1.39"
              rx="0.69"
              style="fill: #d8d8d8"
            />
            <ellipse
              cx="48.84"
              cy="78.64"
              rx="16.67"
              ry="16.66"
              style="fill: url(#Degradado_sin_nombre)"
            />
            <rect
              x="84.96"
              y="66.14"
              width="39.94"
              height="5.55"
              rx="1.04"
              style="fill: #e1e8ee"
            />
            <rect
              x="84.96"
              y="77.25"
              width="138.91"
              height="2.78"
              rx="1.04"
              style="fill: #e1e8ee"
            />
            <rect
              x="84.96"
              y="82.81"
              width="127.34"
              height="2.78"
              rx="1.04"
              style="fill: #e1e8ee"
            />
            <rect
              x="84.96"
              y="88.36"
              width="115.76"
              height="2.78"
              rx="1.04"
              style="fill: #e1e8ee"
            />
            <circle cx="244.7" cy="78.64" r="4.17" style="fill: #a7b9c8" />
            <circle cx="266.93" cy="78.64" r="4.17" style="fill: #a7b9c8" />
            <circle cx="255.82" cy="78.64" r="4.17" style="fill: #a7b9c8" />
            <circle cx="278.04" cy="78.64" r="4.17" style="fill: #a7b9c8" />
            <circle cx="289.16" cy="78.64" r="4.17" style="fill: #a7b9c8" />
            <ellipse
              cx="47.8"
              cy="124.81"
              rx="15.63"
              ry="15.62"
              style="fill: url(#Degradado_sin_nombre_2)"
            />
            <rect
              x="83.91"
              y="112.31"
              width="39.94"
              height="5.55"
              rx="1.04"
              style="fill: #e1e8ee"
            />
            <rect
              x="83.91"
              y="123.42"
              width="138.91"
              height="2.78"
              rx="1.04"
              style="fill: #e1e8ee"
            />
            <rect
              x="83.91"
              y="128.97"
              width="127.34"
              height="2.78"
              rx="1.04"
              style="fill: #e1e8ee"
            />
            <rect
              x="83.91"
              y="134.53"
              width="115.76"
              height="2.78"
              rx="1.04"
              style="fill: #e1e8ee"
            />
            <circle cx="243.66" cy="124.81" r="4.17" style="fill: #a7b9c8" />
            <circle cx="265.89" cy="124.81" r="4.17" style="fill: #a7b9c8" />
            <circle cx="254.78" cy="124.81" r="4.17" style="fill: #a7b9c8" />
            <ellipse
              cx="47.8"
              cy="174.44"
              rx="15.63"
              ry="15.62"
              style="fill: url(#Degradado_sin_nombre_3)"
            />
            <rect
              x="83.91"
              y="161.95"
              width="39.94"
              height="5.55"
              rx="1.04"
              style="fill: #e1e8ee"
            />
            <rect
              x="83.91"
              y="173.06"
              width="138.91"
              height="2.78"
              rx="1.04"
              style="fill: #e1e8ee"
            />
            <rect
              x="83.91"
              y="178.61"
              width="127.34"
              height="2.78"
              rx="1.04"
              style="fill: #e1e8ee"
            />
            <rect
              x="83.91"
              y="184.16"
              width="115.76"
              height="2.78"
              rx="1.04"
              style="fill: #e1e8ee"
            />
            <circle cx="243.66" cy="174.44" r="4.17" style="fill: #a7b9c8" />
            <circle cx="265.89" cy="174.44" r="4.17" style="fill: #a7b9c8" />
            <circle cx="254.78" cy="174.44" r="4.17" style="fill: #a7b9c8" />
            <circle cx="277" cy="174.44" r="4.17" style="fill: #a7b9c8" />
            <g style="filter: url(#h)">
              <path
                id="i"
                d="M254.8,86.28h99.27A5.92,5.92,0,0,1,360,92.2V258.07a5.92,5.92,0,0,1-5.93,5.93H254.8a5.92,5.92,0,0,1-5.93-5.93V92.2A5.92,5.92,0,0,1,254.8,86.28Z"
                style="fill-rule: evenodd"
              />
            </g>
            <path
              d="M254.8,86.28h99.27A5.92,5.92,0,0,1,360,92.2V258.07a5.92,5.92,0,0,1-5.93,5.93H254.8a5.92,5.92,0,0,1-5.93-5.93V92.2A5.92,5.92,0,0,1,254.8,86.28Z"
              style="fill: #fff; fill-rule: evenodd"
            />
            <g style="filter: url(#j)">
              <path
                id="k"
                d="M254.8,86.28h99.27A5.92,5.92,0,0,1,360,92.2v13H248.87v-13A5.92,5.92,0,0,1,254.8,86.28Z"
                style="fill-rule: evenodd"
              />
            </g>
            <path
              d="M254.8,86.28h99.27A5.92,5.92,0,0,1,360,92.2v13H248.87v-13A5.92,5.92,0,0,1,254.8,86.28Z"
              style="fill: #00252e; fill-rule: evenodd"
            />
            <rect
              x="260.03"
              y="92.79"
              width="36.12"
              height="7.11"
              rx="1.48"
              style="fill: #e1e8ee"
            />
            <path
              d="M339.26,93.39h8.29a.59.59,0,0,1,.6.59h0a.59.59,0,0,1-.6.59h-8.29a.59.59,0,0,1-.6-.59h0A.59.59,0,0,1,339.26,93.39Z"
              style="fill: #d8d8d8; fill-rule: evenodd"
            />
            <path
              d="M339.26,95.76h8.29a.59.59,0,0,1,.6.59h0a.6.6,0,0,1-.6.59h-8.29a.6.6,0,0,1-.6-.59h0A.59.59,0,0,1,339.26,95.76Z"
              style="fill: #d8d8d8; fill-rule: evenodd"
            />
            <path
              d="M339.26,98.12h8.29a.6.6,0,0,1,.6.6h0a.6.6,0,0,1-.6.59h-8.29a.6.6,0,0,1-.6-.59h0A.6.6,0,0,1,339.26,98.12Z"
              style="fill: #d8d8d8; fill-rule: evenodd"
            />
            <circle
              cx="265.19"
              cy="128.97"
              r="5.21"
              style="fill: url(#Degradado_sin_nombre_4)"
            />
            <rect
              x="275.96"
              y="124.81"
              width="19.97"
              height="1.85"
              rx="0.32"
              style="fill: #e1e8ee"
            />
            <rect
              x="275.96"
              y="128.51"
              width="69.46"
              height="0.93"
              rx="0.32"
              style="fill: #e1e8ee"
            />
            <rect
              x="275.96"
              y="130.36"
              width="63.67"
              height="0.93"
              rx="0.32"
              style="fill: #e1e8ee"
            />
            <rect
              x="275.96"
              y="132.21"
              width="57.88"
              height="0.93"
              rx="0.32"
              style="fill: #e1e8ee"
            />
            <circle
              cx="265.19"
              cy="176.87"
              r="5.21"
              style="fill: url(#Degradado_sin_nombre_5)"
            />
            <rect
              x="275.96"
              y="172.71"
              width="19.97"
              height="1.85"
              rx="0.32"
              style="fill: #e1e8ee"
            />
            <rect
              x="275.96"
              y="176.41"
              width="69.46"
              height="0.93"
              rx="0.32"
              style="fill: #e1e8ee"
            />
            <rect
              x="275.96"
              y="178.26"
              width="63.67"
              height="0.93"
              rx="0.32"
              style="fill: #e1e8ee"
            />
            <rect
              x="275.96"
              y="180.11"
              width="57.88"
              height="0.93"
              rx="0.32"
              style="fill: #e1e8ee"
            />
            <rect
              x="275.96"
              y="140.77"
              width="19.97"
              height="1.85"
              rx="0.32"
              style="fill: #e1e8ee"
            />
            <rect
              x="275.96"
              y="144.48"
              width="69.46"
              height="0.93"
              rx="0.32"
              style="fill: #e1e8ee"
            />
            <rect
              x="275.96"
              y="146.33"
              width="63.67"
              height="0.93"
              rx="0.32"
              style="fill: #e1e8ee"
            />
            <rect
              x="275.96"
              y="148.18"
              width="57.88"
              height="0.93"
              rx="0.32"
              style="fill: #e1e8ee"
            />
            <circle
              cx="265.19"
              cy="144.94"
              r="5.21"
              style="fill: url(#Degradado_sin_nombre_6)"
            />
            <rect
              x="275.96"
              y="188.68"
              width="19.97"
              height="1.85"
              rx="0.32"
              style="fill: #e1e8ee"
            />
            <rect
              x="275.96"
              y="192.38"
              width="69.46"
              height="0.93"
              rx="0.32"
              style="fill: #e1e8ee"
            />
            <rect
              x="275.96"
              y="194.23"
              width="63.67"
              height="0.93"
              rx="0.32"
              style="fill: #e1e8ee"
            />
            <rect
              x="275.96"
              y="196.08"
              width="57.88"
              height="0.93"
              rx="0.32"
              style="fill: #e1e8ee"
            />
            <circle
              cx="265.19"
              cy="192.84"
              r="5.21"
              style="fill: url(#Degradado_sin_nombre_7)"
            />
            <rect
              x="275.96"
              y="156.74"
              width="19.97"
              height="1.85"
              rx="0.32"
              style="fill: #e1e8ee"
            />
            <rect
              x="275.96"
              y="160.44"
              width="69.46"
              height="0.93"
              rx="0.32"
              style="fill: #e1e8ee"
            />
            <rect
              x="275.96"
              y="162.3"
              width="63.67"
              height="0.93"
              rx="0.32"
              style="fill: #e1e8ee"
            />
            <rect
              x="275.96"
              y="164.15"
              width="57.88"
              height="0.93"
              rx="0.32"
              style="fill: #e1e8ee"
            />
            <circle
              cx="265.19"
              cy="160.91"
              r="5.21"
              style="fill: url(#Degradado_sin_nombre_8)"
            />
            <rect
              x="275.96"
              y="204.64"
              width="19.97"
              height="1.85"
              rx="0.32"
              style="fill: #e1e8ee"
            />
            <rect
              x="275.96"
              y="208.35"
              width="69.46"
              height="0.93"
              rx="0.32"
              style="fill: #e1e8ee"
            />
            <rect
              x="275.96"
              y="210.2"
              width="63.67"
              height="0.93"
              rx="0.32"
              style="fill: #e1e8ee"
            />
            <rect
              x="275.96"
              y="212.05"
              width="57.88"
              height="0.93"
              rx="0.32"
              style="fill: #e1e8ee"
            />
            <circle
              cx="265.19"
              cy="208.81"
              r="5.21"
              style="fill: url(#Degradado_sin_nombre_9)"
            />
            <circle
              cx="265.19"
              cy="224.78"
              r="5.21"
              style="fill: url(#Degradado_sin_nombre_10)"
            />
            <rect
              x="275.96"
              y="220.61"
              width="19.97"
              height="1.85"
              rx="0.32"
              style="fill: #e1e8ee"
            />
            <rect
              x="275.96"
              y="224.31"
              width="69.46"
              height="0.93"
              rx="0.32"
              style="fill: #e1e8ee"
            />
            <rect
              x="275.96"
              y="226.16"
              width="63.67"
              height="0.93"
              rx="0.32"
              style="fill: #e1e8ee"
            />
            <rect
              x="275.96"
              y="228.02"
              width="57.88"
              height="0.93"
              rx="0.32"
              style="fill: #e1e8ee"
            />
            <rect
              x="275.96"
              y="236.58"
              width="19.97"
              height="1.85"
              rx="0.32"
              style="fill: #e1e8ee"
            />
            <rect
              x="275.96"
              y="240.28"
              width="69.46"
              height="0.93"
              rx="0.32"
              style="fill: #e1e8ee"
            />
            <rect
              x="275.96"
              y="242.13"
              width="63.67"
              height="0.93"
              rx="0.32"
              style="fill: #e1e8ee"
            />
            <rect
              x="275.96"
              y="243.98"
              width="57.88"
              height="0.93"
              rx="0.32"
              style="fill: #e1e8ee"
            />
            <circle
              cx="265.19"
              cy="240.74"
              r="5.21"
              style="fill: url(#Degradado_sin_nombre_11)"
            />
          </svg>
        </div>
      </section>
      <section class="cta">
        <div id="cta">
          <h1>Build the comunity your fans will love</h1>
          <p>
            huddle re-images the way we build comunities. You have a voice, but
            so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button>Register</button>
          <div class="red">
            <div id="red">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ionicon"
                  viewBox="0 0 512 512"
                >
                  <title>Logo Facebook</title>
                  <path
                    d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                    fill-rule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ionicon"
                  viewBox="0 0 512 512"
                >
                  <title>Logo Twitter</title>
                  <path
                    d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ionicon"
                  viewBox="0 0 512 512"
                >
                  <title>Logo Instagram</title>
                  <path
                    d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"
                  />
                  <path
                    d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer>
      <p class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
          >Frontend Mentor</a
        >. Coded by <a href="#">Denis</a>.
      </p>
    </footer>
`;
