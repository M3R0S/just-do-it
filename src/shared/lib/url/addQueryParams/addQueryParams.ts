export const getQueryParams = (params: OptionalRecord<string, string>) => {
    const searchParams = new URLSearchParams(window.location.search);

    Object.entries(params).forEach(([name, value]) => {
        if (value) {
            searchParams.set(name, value);
        }
    });

    return `?${searchParams.toString()}`;
};

/**
 * Функция добавления параметров строки запроса в URL
 */
export const addQueryParams = (params: Record<string, string>) => {
    window.history.pushState(null, "", getQueryParams(params));
};
