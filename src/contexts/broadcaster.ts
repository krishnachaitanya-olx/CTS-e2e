import { createContext } from 'react';
import { Broadcaster } from 'services/broadcaster';

const BroadcasterCotext = createContext<Broadcaster|null>(null);

export default BroadcasterCotext;
