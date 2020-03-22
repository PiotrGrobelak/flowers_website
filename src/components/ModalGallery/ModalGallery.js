const customStyles = {
    header: (base, state) => ({
        ...base,
        borderBottom: '2px solid grey',
        color: state.isFullscreen ? 'red' : 'blue',
        padding: 20,
    }),
    view: () => ({
        // none of react,-images styles are passed to <View />
        margin: "0 auto",
        height: "100%",
        width: "100%",
    }),
    footer: (base, state) => {
        const opacity = state.interactionIsIdle ? 0 : 1;
        const transition = 'opacity 300ms';
        const bgc = { background: "red" }
        return { ...base, opacity, transition, bgc };
    }
}