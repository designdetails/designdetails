import React from 'react';
declare type State = Array<React.ReactElement<any>> | undefined;
declare type SideEffectProps = {
    reduceComponentsToState: <T>(components: Array<React.ReactElement<any>>, props: T) => State;
    handleStateChange?: (state: State) => void;
    inAmpMode?: boolean;
};
declare const _default: () => {
    new (props: any): {
        componentDidMount(): void;
        componentDidUpdate(): void;
        componentWillUnmount(): void;
        render(): null;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<SideEffectProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<SideEffectProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    rewind(): State;
    contextType?: React.Context<any> | undefined;
};
export default _default;
