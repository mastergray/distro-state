// Manages distrubted state using bound setter/getter methods:
export default class DistroState {

    // CONSTRUCTOR :: {STRING:*}|VOID, {STRING:{get:VOID->*, set:*->VOID}}|VOID -> this
    constructor(shared, states) {
        this.shared = shared ?? {}; // Stores state shared between all registered binding
        this.states = states ?? {}; // Stores all bindings that manage shared state
    }

    /**
     * 
     *  Instance Methods 
     * 
     */

    // :: STRING, [* -> VOID|*, VOID -> *] -> this
    // Binds setter/getter methods to shared state using given ID
    register(id, [get, set]) {
        this.shared[id] = get instanceof Function ? get() : get
        this.states[id] = (value) => {
            this.shared[id] = value;
            set(value);
        }
        return this;
    }

    // :: STRING -> this
    // Removes setter/getter methods by bound ID
    // NOTE: Since shared state is intended to be indepenent of any binding, shared state is not mutated when unregistering bound methods
    unregister(id) {
        if (this.states[id]) {
            delete this.states[id];
        }
        return this;
    }

    // :: STRING, * -> this
    // Sets value of bound setter:
    // NOTE: Setting value also update shared state as well:
    // NOTE: If no setter is bound to the given property of state - we update shared state directly
    set(id, value) {
        if (this.states[id] !== undefined) {
            this.states[id](value);
        } else {
            this.shared[id] = value;
        }
        return this;
    }

    // :: STIRNG -> *|VOID
    // Returns value of bound getter:
    get(id) {
        return this.shared[id];
    }
    
    /**
     * 
     *  Static Methods 
     * 
     */

    // Static Factory Method ::  {STRING:*}|VOID, {STRING:{get:VOID->*, set:*->VOID}}|VOID -> distroState
    static init(shared, states) {
        return new DistroState(shared, states);
    }

}