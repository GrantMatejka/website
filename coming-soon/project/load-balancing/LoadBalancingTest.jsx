'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

function randomNodeSelection(nodes) {
  const maxFloored = Math.floor(nodes.length);
  return Math.floor(Math.random() * maxFloored);
}

function twoChoiceMinimum(nodes) {
  const maxFloored = Math.floor(nodes.length);
  const choice1 = Math.floor(Math.random() * maxFloored);
  const choice2 = Math.floor(Math.random() * maxFloored);

  if (nodes[choice1] < nodes[choice2]) {
    return choice1;
  }

  return choice2;
}

function threeChoiceMinimum(nodes) {
  const maxFloored = Math.floor(nodes.length);
  const choice1 = Math.floor(Math.random() * maxFloored);
  const choice2 = Math.floor(Math.random() * maxFloored);
  const choice3 = Math.floor(Math.random() * maxFloored);

  if (nodes[choice1] < nodes[choice2] && nodes[choice1] < nodes[choice3]) {
    return choice1;
  } else if (
    nodes[choice2] < nodes[choice1] &&
    nodes[choice2] < nodes[choice3]
  ) {
    return choice2;
  }

  return choice3;
}

export function LoadBalancingTest() {
  const [nodeCount, setNodeCount] = useState(32);
  const [iterations, setIterations] = useState(1e5);

  const impls = [
    {
      name: 'Random Node Selection',
      func: randomNodeSelection,
      nodes: Array(nodeCount).fill(0)
    },
    {
      name: 'Two Random Choices Selection',
      func: twoChoiceMinimum,
      nodes: Array(nodeCount).fill(0)
    },
    {
      name: 'Three Random Choices Selection',
      func: threeChoiceMinimum,
      nodes: Array(nodeCount).fill(0)
    }
  ];

  for (const impl of impls) {
    for (let i = 0; i < iterations; i++) {
      impl.nodes[impl.func(impl.nodes)] += 1;
    }
  }

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-12">
      <div className="max-w-m flex w-full items-center gap-1.5">
        <Label htmlFor="nodeCount">Node Count</Label>
        <Input
          type="number"
          id="nodeCount"
          placeholder="Node Count"
          value={nodeCount}
          onChange={(n) => setNodeCount(Math.floor(Number(n.target.value)))}
        />

        <Label htmlFor="iterations">Iterations</Label>
        <Input
          type="number"
          id="iterations"
          placeholder="Iterations"
          value={iterations}
          onChange={(n) => setIterations(Math.floor(Number(n.target.value)))}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
            Best Case Spread:
          </h3>
          <div className="text-sm tabular-nums text-gray-500">
            {iterations / nodeCount}
          </div>
        </div>
        {impls.map((impl, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between gap-x-2 text-base"
          >
            <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
              {impl.name}
            </h3>
            <div className="text-sm tabular-nums text-gray-500">
              {Math.max(...impl.nodes)}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
