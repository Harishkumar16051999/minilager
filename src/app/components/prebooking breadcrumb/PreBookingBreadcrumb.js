export default function PreBookingBreadcrumb(props) {
  return (
    <div className="text-center my-5">
          <div className="ui small breadcrumb">
              <div className={props.activeStep.startsWith(1)?'section text-success':'section' }>
              {/* <svg
      xmlns="http://www.w3.org/2000/svg"
      width="39.333"
      height="39.248"
      viewBox="0 0 39.333 39.248"
    >
      <g fill="#328128" data-name="Tenant Details" transform="translate(.05)">
        <path
          d="M42.311 38h.614a11.61 11.61 0 011.043.622q4.108 3.053 8.2 6.123c.077.057.162.1.307.195v-3.918a.972.972 0 011.107-1.105h3.339c.955 0 1.255.3 1.255 1.263 0 2.541.007 5.082-.008 7.622a.774.774 0 00.373.717c.648.456 1.257.969 1.912 1.412a3.812 3.812 0 011.831 2.474v.689l-.084.291a2.883 2.883 0 01-2.329 2.274 8.343 8.343 0 01-1.695-.019v17.488c0 .2 0 .41-.015.614a2.635 2.635 0 01-2.654 2.5q-12.883.01-25.768-.008a2.733 2.733 0 01-1.15-.264 2.639 2.639 0 01-1.53-2.61q.009-8.661 0-17.324v-.5l-.329.09a2.856 2.856 0 01-3.262-1.262 7.936 7.936 0 01-.518-1.264v-.689a3.967 3.967 0 011.8-2.452Q32.905 44.9 41.023 38.8c.405-.3.858-.533 1.288-.8zm.268 38.022h12.673a1.48 1.48 0 001.691-1.692q0-9.141.005-18.282a.634.634 0 00-.28-.575q-6.814-5.107-13.612-10.241a.618.618 0 00-.877 0q-6.8 5.131-13.612 10.241a.632.632 0 00-.28.574q.009 9.142.005 18.282a1.478 1.478 0 001.691 1.692zM59.242 55.59l.045-.093a1.731 1.731 0 001.689-1.3 1.667 1.667 0 00-.732-1.865l-17.1-12.8c-.518-.387-.518-.386-1.016-.013l-9.585 7.169q-3.783 2.826-7.561 5.656a1.659 1.659 0 00-.756 1.685 1.707 1.707 0 002.788 1.095q4.223-3.161 8.435-6.336l6.042-4.542a1.646 1.646 0 012.269 0c.216.161.43.323.644.484q6.882 5.17 13.769 10.337a6.473 6.473 0 001.069.523zM53.7 41.157v.452c0 1.137.041 2.276-.016 3.409a1.4 1.4 0 00.7 1.41c.861.564 1.662 1.219 2.535 1.87v-7.141z"
          data-name="Path 15970"
          transform="translate(-23 -38)"
        ></path>
        <path
          d="M197.934 311.061h-.266l-.034-.007a2.151 2.151 0 01-.991-.307 2.244 2.244 0 01-1.077-1.56c-.015-.085-.024-.172-.035-.258v-.265a.348.348 0 01.008-.047c.014-.1.023-.2.043-.294a2.269 2.269 0 113.923 1.969 2.229 2.229 0 01-1.313.738c-.086.011-.173.019-.258.031zm-.487-1.9l-.249-.228c-.126-.114-.248-.232-.379-.341a.217.217 0 00-.346.117.236.236 0 00.082.243l.734.668a.227.227 0 00.348-.009l1.41-1.4a.444.444 0 00.037-.039.226.226 0 00-.029-.318.2.2 0 00-.034-.025.23.23 0 00-.293.053l-1.245 1.245-.037.035z"
          data-name="Path 15971"
          transform="translate(-177.906 -279.022)"
        ></path>
        <path
          d="M145 202.189c.059.03.111.057.164.081a8.479 8.479 0 015.153 6.759 15.238 15.238 0 01.085 2.1.816.816 0 01-.731.79 1.727 1.727 0 01-.262.015h-15.266a.88.88 0 01-.988-.768 9.347 9.347 0 01.666-4.317 8.608 8.608 0 014.571-4.584c.043-.018.087-.035.13-.055.01 0 .017-.019.035-.041a5.125 5.125 0 01-1.946-4.366 5.018 5.018 0 011.689-3.54 5.193 5.193 0 116.7 7.927zm3.7 8.009a6.738 6.738 0 00-3.443-5.94 6.6 6.6 0 00-7.6.419 6.671 6.671 0 00-2.8 5.518zm-3.477-12.098a3.446 3.446 0 10-1 2.454 3.45 3.45 0 001-2.454z"
          data-name="Path 15972"
          transform="translate(-121.901 -177.054)"
        ></path>
      </g>
    </svg> */}
     RENTING DETAILS
              </div>
              <i className="right chevron icon divider"></i>
              <div className={props.activeStep.startsWith(12)?'section text-success':'section'}>
              {/* <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23.939"
      height="24.073"
      data-name="select product"
      viewBox="0 0 23.939 24.073"
    >
      <path
        fill="#328128"
        d="M653.351-1332.083h-7.043c-.461 0-.578-.116-.578-.575q0-5.44.005-10.879a1.178 1.178 0 01.115-.5c.483-.99.986-1.97 1.473-2.959a.524.524 0 01.528-.332q5.5.008 11 0a.526.526 0 01.53.33c.485.989.987 1.97 1.473 2.959a1.127 1.127 0 01.112.478q.01 5.465 0 10.929c0 .426-.126.551-.552.551zm2-11.227v4.3c0 .452-.268.616-.677.415-.389-.191-.773-.4-1.166-.577a.427.427 0 00-.315 0c-.386.177-.763.376-1.144.564-.45.221-.706.059-.706-.447v-4.25h-4.8v10.4h13.6v-10.409zm-3.92-.82q.3-1.187.59-2.368a.333.333 0 00-.072-.023h-3.834a.31.31 0 00-.212.155c-.171.315-.325.64-.485.961l-.635 1.272zm8.48.005c-.379-.758-.745-1.478-1.1-2.2a.306.306 0 00-.323-.2c-1.205.008-2.406 0-3.609 0-.067 0-.13.007-.217.013.2.8.4 1.595.6 2.386zm-7.757.821v3.744c.319-.158.62-.3.911-.455a.545.545 0 01.566 0c.291.157.591.3.9.451v-3.741zm.1-.822h2.174l-.6-2.385h-.984z"
        data-name="Path 392"
        transform="translate(-645.052 1347.33)"
      ></path>
      <path
        fill="#328128"
        d="M652.33-1106.582v-.642a.4.4 0 01.435-.438q1.566-.008 3.132 0a.4.4 0 01.441.435v.366h2.675c.4 0 .536.134.536.519v5.389c0 .373-.14.509-.518.51h-2.69v.376a.4.4 0 01-.426.423q-1.578.008-3.157 0a.4.4 0 01-.425-.424v-.518c-.2.1-.38.171-.546.268a2.222 2.222 0 01-1.173.283c-2.121-.012-4.243 0-6.365-.015a1.72 1.72 0 01-.8-.209c-2.321-1.321-4.63-2.661-6.942-4a1.611 1.611 0 01-.812-1.931 1.6 1.6 0 012.344-.885c1.222.688 2.431 1.4 3.645 2.1.078.045.159.088.254.141a1.961 1.961 0 011.241-.741c1.992-.523 3.979-1.071 5.972-1.587a1.71 1.71 0 01.761-.005c.726.155 1.442.349 2.163.528.069.018.15.039.255.057zm0 .836c-.9-.224-1.772-.447-2.648-.656a.868.868 0 00-.393.023c-.526.134-1.047.278-1.571.419l-4.638 1.245a.783.783 0 00-.629.636.8.8 0 001.071.905q2.332-.622 4.663-1.249a.4.4 0 01.536.264.393.393 0 01-.04.316.393.393 0 01-.261.183c-1.618.437-3.232.889-4.859 1.29a1.563 1.563 0 01-1.9-1.486.338.338 0 00-.206-.325c-.581-.328-1.157-.67-1.735-1l-2.082-1.2a.783.783 0 00-.9.049.744.744 0 00-.3.8.846.846 0 00.465.585q3.461 1.993 6.918 3.987a1.006 1.006 0 00.474.114c2.1.007 4.192 0 6.289.009a1.631 1.631 0 00.86-.2c.281-.163.688-.235.83-.473s.054-.646.054-.978c.003-1.083.002-2.16.002-3.258zm3.2-1.1h-2.376v6.388h2.376zm.831.8v4.782h2.378v-4.782z"
        data-name="Path 393"
        transform="translate(-635.609 1123.713)"
      ></path>
    </svg> */}
    ADD ON
              </div>
              <i className="right chevron icon divider"></i>
              <div className={props.activeStep.startsWith(123)?'section text-success':'section'}>TENANT DEATILS</div>
              <i className="right chevron icon divider"></i>
              <div className={props.activeStep.startsWith(1234)?'section text-success':'section'}>E-SIGN &PAY NOW</div>
          </div>
    </div>
  )
}
