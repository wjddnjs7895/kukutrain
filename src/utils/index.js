export function deviceModel() {
  let currentOS;
  const mobile = /iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase());

  if (mobile) {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.search('android') > -1) {
      currentOS = 'android';

      const deviceAgent =
        'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; device Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Safari/533.1';
      let androidversion = parseFloat(deviceAgent.match(/Android\s+([\d\.]+)/)[1]);
      document.querySelector('body').getAttribute('data-device', androidversion);
    } else if (userAgent.search('iphone') > -1 || userAgent.search('ipod') > -1 || userAgent.search('ipad') > -1) {
      currentOS = 'ios';
      if (userAgent.search('Naver') > -1) {
        currentPS = 'ios/naver';
      }
    } else {
      currentOS = 'else';
    }
  } else {
    currentOS = 'nomobile';
  }
  return currentOS;
}
