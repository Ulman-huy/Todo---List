export default function logger(reducer) {
    return (prevState, action, args) => {
        console.group(action);
        console.log('Prv state: ', prevState);
        console.log('Action args: ', args);
        const nextState = reducer(prevState, action, args)
        console.log('Next state: ', nextState);
        console.groupEnd()
        return nextState
    }
}