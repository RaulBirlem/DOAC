import { useEffect, useState } from "react";

export function BuscarCep(url) {
    const [cep, setCep] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    useEffect(() => {
        if (url != null) {
            async function buscaCep() {
                setLoading(true);
                setError(false);
                setCep("");

                try {
                    const resposta = await fetch(url);
                    const cepJson = await resposta.json();
                    setCep(cepJson);
                    setLoading(false);
                } catch {
                    setError("Erro ao buscar cep.");
                    setLoading(false);
                }
            }

            buscaCep();
        }
    }, [url]);

    return [cep, error, loading];
}
