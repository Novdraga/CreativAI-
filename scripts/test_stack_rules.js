const { resolveStack, GOAL_OPTIONS } = require('./src/lib/stackRules.ts');

const budgets = ['0', '25', '50', '100'];
const exps = ['beginner', 'intermediate', 'advanced'];
const reqs = ['commercial', 'quality', 'cheapest', 'fastest'];

let count = 0;
let errors = 0;

for (const g of GOAL_OPTIONS) {
  for (const b of budgets) {
    for (const e of exps) {
      for (const r of reqs) {
        count++;
        const res = resolveStack({ goal: g.id, budget: b, experience: e, requirement: r });
        if (!res.goalLabel || !res.steps || res.steps.length === 0 || typeof res.monthlyTotal !== 'number') {
          console.error(`Error in combo: ${g.id}, budget ${b}, exp ${e}, req ${r}`);
          errors++;
        }
      }
    }
  }
}

console.log(`Tested ${count} stack rule combinations. Errors: ${errors}`);
