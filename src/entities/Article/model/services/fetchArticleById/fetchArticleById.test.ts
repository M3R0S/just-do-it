import { AxiosResponse } from "axios";

import { fetchArticleById } from "./fetchArticleById";
import { Article } from "../../types/article";

import { testAsyncThunk } from "shared/lib/helpers/testAsyncThunk";

describe("fetchArticleById", () => {
    const data: Article = {
        id: "1",
        title: "Javascript news",
        subtitle: "Что нового в JS за 2023 год?",
        img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
        views: "1022",
        createdAt: "16.03.2022",
        type: ["IT"],
        user: {
            id: "1",
            username: "admin",
            avatar: "https://anekdo.net/pic/photo/221026-233029vwf.jpg",
        },
        blocks: [
            {
                id: "1",
                type: "TEXT",
                title: "Заголовок этого блока",
                paragraphs: [
                    "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                    "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                    "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
                ],
            },
            {
                id: "4",
                type: "CODE",
                code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
            },
            {
                id: "5",
                type: "TEXT",
                title: "Заголовок этого блока",
                paragraphs: [
                    "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                    "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
                ],
            },
            {
                id: "2",
                type: "IMAGE",
                src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
                title: "Рисунок 1 - скриншот сайта",
            },
            {
                id: "3",
                type: "CODE",
                code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
            },
            {
                id: "7",
                type: "TEXT",
                title: "Заголовок этого блока",
                paragraphs: [
                    "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                    "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
                ],
            },
            {
                id: "8",
                type: "IMAGE",
                src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
                title: "Рисунок 1 - скриншот сайта",
            },
            {
                id: "9",
                type: "TEXT",
                title: "Заголовок этого блока",
                paragraphs: [
                    "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                ],
            },
        ],
    };

    test("success", async () => {
        const { api, callThunk } = testAsyncThunk(fetchArticleById);

        api.get.mockReturnValue(Promise.resolve<Partial<AxiosResponse<Article>>>({ data }));

        const result = await callThunk("1");

        expect(api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });

    test("error no data 404", async () => {
        const { callThunk, api } = testAsyncThunk(fetchArticleById);

        api.get.mockReturnValue(Promise.resolve<Partial<AxiosResponse<Article>>>({ status: 404 }));

        const result = await callThunk("1");

        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toBe("404");
    });

    test("error server 500", async () => {
        const { callThunk, api } = testAsyncThunk(fetchArticleById);

        api.get.mockRejectedValue(new Error("unknown status code"));

        const result = await callThunk("1");

        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toBe("500");
    });
});
