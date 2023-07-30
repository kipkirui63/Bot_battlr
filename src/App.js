import React, { useState, useEffect } from 'react';
import './App.css';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotFilterSort from './components/BotFilterSort';
import BotSpecs from './components/BotSpecs';

const App = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [filterBy, setFilterBy] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [selectedBot, setSelectedBot] = useState(null);