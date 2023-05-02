declare namespace NPokemonList {
    type TResult = { name: string; url: string };

    interface IResponse {
        count: number;
        next: string | null;
        previous: string | null;
        results: TResult[];
    }

    interface IStore {
        count: number;
        list: TResult[];
    }
}
