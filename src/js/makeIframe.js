import html from './../../dist/index.html';
import script from "./../../dist/bundle";
import css from '../../dist/main.css';

const STYLE_SHEET = css[0][1];

function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {
    let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);
    if (timer <= 0) return;
    ((!isVariable && elements.length >= minElements) || (isVariable && (typeof window[waitFor] !== 'undefined'))) ?
        callback(elements) :
        setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, (timer - frequency)), frequency);
};

async function addHtml() {
    if (html) {

        /** default iframe inline styling **/
        let iframeStyle = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            height: 80vh;
            width: 70vw;
        `;

        /** Append Html */
        var iframe = document.createElement('iframe');
        iframe.setAttribute("style", iframeStyle);
        document.getElementById("elx-chatbot").appendChild(iframe);

        iframe.contentWindow.document.open();
        iframe.contentWindow.document.write(html);

        /** Append Style */
        var styles = document.createElement('style');
        styles.setAttribute('type', 'text/css');
        let head = iframe.contentWindow.document.querySelector("head");
        head.appendChild(styles).textContent = STYLE_SHEET;

        /** Append Script */
        var scriptTag = `<script>${script}<\/script>`;
        let iframeBody = iframe.contentWindow.document.querySelector("body");
        iframeBody.insertAdjacentHTML("beforeend", scriptTag);

        iframe.contentWindow.document.close();

    } else {
        console.log("somthing went wrong")
    }
}

waitForElem("#elx-chatbot", addHtml);