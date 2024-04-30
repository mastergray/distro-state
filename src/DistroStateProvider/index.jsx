import React, { createContext, useContext, useEffect, useState } from 'react';
import DistroState from '../DistroState';

// Create a context for the DistroState
const DistroStateContext = createContext(null);

// Provider in your app's component tree
export default function DistroStateProvider (props) {
  
    const distroState = new DistroState(props.state);

    return (
        <DistroStateContext.Provider value={distroState}>
            {props.children}
        </DistroStateContext.Provider>
    );
};

// HOOK :: VOID -> distroState
// Custom hook for accessing shared distroState instance:
export const useDistroState = () => {
    return useContext(DistroStateContext);
}

// HOOK :: STRING -> distroState
// Handlers registering and unregistering state handlers bound to shared distroState instance:
export const useDistroStateRegistry = (id) => {

    // Get shared distoState from context and initialize state handlers using shared state
    const distroState =  useContext(DistroStateContext);
    const initValue = distroState.get(id);
    const [get, set] = useState(initValue)

    // This manages when to register/ungister state bindings whenever component is mounted/unmounted:
    useEffect(() => {

        // Regiseter state handlers once component is rendered:
        distroState.register(id,[get,set]);
        
        // Unreigster handler when component is unmounted:
        return () => distroState.unregister(id);

    }, [distroState, id, get, set]);

    // Return distroState instance in case we need it for something after we register state handlers:
    return distroState;

}
