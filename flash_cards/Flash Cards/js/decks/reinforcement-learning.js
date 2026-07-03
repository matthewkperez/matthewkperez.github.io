// Reinforcement Learning flashcard deck
// Each card: q (question), options (3 choices), correct (index of right answer), why (explanation per option, same order as options)
window.FLASHCARD_DECKS = window.FLASHCARD_DECKS || {};
window.FLASHCARD_DECKS["reinforcement-learning"] = {
  title: "Reinforcement Learning",
  cards: [
    {
      q: "What does the 'Markov' in Markov Decision Process actually mean?",
      options: [
        "The next state and reward depend only on the current state and action, not on prior history",
        "The agent must fully observe the true state at every timestep",
        "All future rewards must be discounted by the same factor"
      ],
      correct: 0,
      why: [
        "Correct — this is the Markov property: the future is conditionally independent of the past given the present state and action.",
        "This describes full observability, a separate assumption MDPs make (as opposed to POMDPs). It's not what 'Markov' refers to.",
        "This describes the discount factor γ, a different component of the MDP tuple, not the Markov property."
      ]
    },
    {
      q: "Which tuple correctly defines a standard MDP?",
      options: [
        "(States, Actions, Transition function, Reward function, Discount factor)",
        "(States, Actions, Policy, Value function, Episodes)",
        "(States, Observations, Belief state, Actions, Reward)"
      ],
      correct: 0,
      why: [
        "Correct — an MDP is formally the tuple (S, A, P, R, γ).",
        "Policies and value functions are solved for on top of an MDP; they aren't part of its definition.",
        "Belief states and observations belong to a POMDP (partially observable MDP), not a standard MDP."
      ]
    },
    {
      q: "The return G_t in RL is best described as:",
      options: [
        "The sum of (discounted) rewards from timestep t onward",
        "The immediate reward received at timestep t",
        "The average reward per episode across training"
      ],
      correct: 0,
      why: [
        "Correct — G_t = R_{t+1} + γR_{t+2} + γ²R_{t+3} + ... is the cumulative future discounted reward.",
        "That's just R_t, one term inside the return, not the return itself.",
        "That describes a training metric, not the mathematical definition of the return."
      ]
    },
    {
      q: "What happens as the discount factor γ approaches 0?",
      options: [
        "The agent becomes myopic, caring almost only about the immediate reward",
        "The agent weighs all future rewards equally, however far away",
        "The agent's policy becomes fully deterministic"
      ],
      correct: 0,
      why: [
        "Correct — with γ near 0, terms beyond the immediate reward shrink toward zero, so the agent optimizes short-term gain.",
        "That's what γ close to 1 does — future rewards keep nearly full weight.",
        "γ controls the time horizon of value, not the stochasticity of the policy."
      ]
    },
    {
      q: "A stochastic policy π(a|s) is best described as:",
      options: [
        "A probability distribution over actions conditioned on state",
        "A fixed lookup table mapping each state to exactly one action",
        "The expected return of taking action a in state s"
      ],
      correct: 0,
      why: [
        "Correct — a stochastic policy gives P(action = a | state = s) for every action.",
        "That describes a deterministic policy, a special case where the distribution puts all probability on one action.",
        "That describes the action-value function Q(s,a), not a policy."
      ]
    },
    {
      q: "The state-value function V^π(s) represents:",
      options: [
        "Expected return starting from s and following policy π thereafter",
        "The immediate reward available at state s",
        "The probability of reaching the goal state from s"
      ],
      correct: 0,
      why: [
        "Correct — V^π(s) = E_π[G_t | S_t = s], the expected long-run return under π from s.",
        "The immediate reward is just one component folded into the return, not the whole value function.",
        "Reach probability is a different quantity entirely; V^π measures expected cumulative reward, not success probability."
      ]
    },
    {
      q: "How does the action-value function Q^π(s,a) differ from V^π(s)?",
      options: [
        "Q^π conditions on taking a specific action a first, then following π afterward",
        "Q^π ignores the discount factor while V^π uses it",
        "Q^π is only defined for terminal states"
      ],
      correct: 0,
      why: [
        "Correct — Q^π(s,a) = E_π[G_t | S_t=s, A_t=a], letting you evaluate a specific action before committing to π.",
        "Both V^π and Q^π use the same discounting; that's not a difference between them.",
        "Q^π is defined for any state-action pair, not just terminal states."
      ]
    },
    {
      q: "The Bellman expectation equation expresses V^π(s) in terms of:",
      options: [
        "The immediate expected reward plus the discounted expected value of successor states",
        "The sum of all rewards ever received by the agent",
        "The maximum Q-value over all actions in state s"
      ],
      correct: 0,
      why: [
        "Correct — V^π(s) = Σ_a π(a|s) Σ_{s',r} p(s',r|s,a)[r + γV^π(s')], a one-step recursive decomposition.",
        "That's the (undiscounted, un-bootstrapped) Monte Carlo return, not the Bellman decomposition.",
        "Taking a max over actions describes the Bellman OPTIMALITY equation for V*, not the expectation equation for an arbitrary π."
      ]
    },
    {
      q: "What distinguishes the Bellman optimality equation from the Bellman expectation equation?",
      options: [
        "Optimality takes a max over actions instead of averaging under a fixed policy",
        "Optimality equations don't involve the discount factor",
        "Optimality equations only apply to episodic (not continuing) tasks"
      ],
      correct: 0,
      why: [
        "Correct — V*(s) = max_a Σ_{s',r} p(s',r|s,a)[r + γV*(s')] optimizes over actions rather than averaging over a given π.",
        "Discounting still applies identically in both equations.",
        "Both forms apply to episodic and continuing tasks alike; that's not the distinction."
      ]
    },
    {
      q: "Given the optimal action-value function Q*(s,a), how do you get the optimal policy?",
      options: [
        "Act greedily: choose argmax_a Q*(s,a) in every state",
        "Sample actions uniformly at random from the action space",
        "Follow the action with the smallest Q* value to minimize risk"
      ],
      correct: 0,
      why: [
        "Correct — once Q* is known, greedy action selection with respect to it is itself an optimal policy.",
        "Uniform random action selection ignores the learned values entirely and is generally suboptimal.",
        "Minimizing Q* would select the worst actions, the opposite of what's wanted."
      ]
    },
    {
      q: "Policy evaluation (as a dynamic programming step) refers to:",
      options: [
        "Computing V^π for a fixed policy π using repeated Bellman backups",
        "Searching over all possible policies to find the best one",
        "Running the policy in the real environment to measure total episode reward"
      ],
      correct: 0,
      why: [
        "Correct — policy evaluation iteratively applies the Bellman expectation update until V^π converges for a fixed π.",
        "Searching over policies is policy improvement/iteration, a separate step that uses the evaluated V^π.",
        "Policy evaluation in DP is done via the model (planning), not by executing rollouts in the environment."
      ]
    },
    {
      q: "The policy improvement theorem guarantees that:",
      options: [
        "Acting greedily with respect to V^π produces a new policy that is at least as good as π",
        "Any random change to a policy will improve its performance",
        "Policy improvement always converges in exactly one step"
      ],
      correct: 0,
      why: [
        "Correct — if π' is greedy w.r.t. V^π, then V^{π'}(s) ≥ V^π(s) for all s.",
        "Random changes have no such guarantee; the theorem specifically concerns greedy improvement.",
        "Policy iteration typically requires multiple evaluate/improve cycles before convergence, not just one."
      ]
    },
    {
      q: "How does value iteration differ from policy iteration?",
      options: [
        "Value iteration truncates policy evaluation to a single sweep before improving, merging both steps",
        "Value iteration doesn't require a model of the environment",
        "Value iteration only works for deterministic policies"
      ],
      correct: 0,
      why: [
        "Correct — value iteration combines evaluation and improvement into one Bellman-optimality backup per sweep instead of fully evaluating π each time.",
        "Both value iteration and policy iteration are model-based dynamic programming methods that require p(s',r|s,a).",
        "Value iteration operates on value functions directly and produces a deterministic greedy policy at the end, but it isn't restricted to deterministic policies during computation."
      ]
    },
    {
      q: "Dynamic programming methods (policy/value iteration) require:",
      options: [
        "A known model of the environment's transition and reward functions",
        "A large replay buffer of past experience",
        "A neural network to approximate the value function"
      ],
      correct: 0,
      why: [
        "Correct — DP is model-based planning: it needs p(s',r|s,a) to compute Bellman backups exactly.",
        "Replay buffers are a tool for sample-based, model-free deep RL (like DQN), not classical DP.",
        "Classical DP uses tabular value functions computed from the known model; no function approximation is required."
      ]
    },
    {
      q: "What is the defining feature of Monte Carlo (MC) methods in RL?",
      options: [
        "They learn value estimates from complete episodes' actual returns, without bootstrapping",
        "They update value estimates after every single timestep using the next state's estimate",
        "They require a full model of the environment's dynamics"
      ],
      correct: 0,
      why: [
        "Correct — MC methods wait until an episode ends, then use the actual observed return G_t to update estimates.",
        "That describes TD methods, which bootstrap using the estimate of the next state rather than waiting for the full return.",
        "MC methods are model-free: they learn purely from sampled episodes, not a known transition model."
      ]
    },
    {
      q: "'Bootstrapping' in RL refers to:",
      options: [
        "Updating a value estimate partly using another (possibly inaccurate) value estimate rather than the full actual return",
        "Initializing all value estimates randomly before training begins",
        "Running multiple independent training runs and averaging their results"
      ],
      correct: 0,
      why: [
        "Correct — TD methods bootstrap: V(s) is updated using r + γV(s'), where V(s') is itself an estimate.",
        "Random initialization is a separate implementation detail, not what 'bootstrapping' means in RL.",
        "That describes ensembling, an unrelated technique."
      ]
    },
    {
      q: "The TD(0) update rule is:",
      options: [
        "V(s) ← V(s) + α[r + γV(s') − V(s)]",
        "V(s) ← V(s) + α[G_t − V(s)], where G_t is the full episode return",
        "V(s) ← max_a Q(s,a)"
      ],
      correct: 0,
      why: [
        "Correct — this is the TD(0) update, where r + γV(s') − V(s) is the TD error, using a one-step bootstrap target.",
        "That's the Monte Carlo update — it uses the actual full return G_t instead of a bootstrapped one-step target.",
        "That's a value-iteration-style Bellman optimality backup for Q, not the TD(0) prediction update for V."
      ]
    },
    {
      q: "Compared to Monte Carlo, TD learning generally offers:",
      options: [
        "Lower variance but higher bias, and the ability to learn online from incomplete episodes",
        "Higher variance but zero bias, and it only works in episodic tasks",
        "Identical bias and variance, but requires a model of the environment"
      ],
      correct: 0,
      why: [
        "Correct — bootstrapping reduces variance (fewer random rewards compounded) at the cost of bias from imperfect value estimates, and lets TD update every step, even in continuing tasks.",
        "MC (not TD) is the unbiased, higher-variance, episode-complete method; TD also works fine in continuing (non-episodic) tasks.",
        "TD and MC have distinctly different bias/variance profiles, and neither requires a model — both are model-free."
      ]
    },
    {
      q: "SARSA's update uses which next-action term, making it on-policy?",
      options: [
        "The action a' actually selected by the current (e.g. ε-greedy) policy in the next state",
        "The action with the maximum Q-value in the next state, regardless of what's actually taken",
        "A randomly sampled action independent of any policy"
      ],
      correct: 0,
      why: [
        "Correct — SARSA (State-Action-Reward-State-Action) updates using the actual next action a' the behavior policy takes, so it evaluates the policy it's following.",
        "Using the max over next-state actions instead of the action actually taken is what makes Q-learning off-policy, not SARSA.",
        "SARSA's next action still comes from the agent's actual policy (e.g. ε-greedy), not an independent random draw."
      ]
    },
    {
      q: "Q-learning's update rule Q(s,a) ← Q(s,a) + α[r + γ max_{a'} Q(s',a') − Q(s,a)] makes it:",
      options: [
        "Off-policy, because it learns about the greedy policy while possibly behaving differently (e.g. ε-greedy)",
        "On-policy, because it only ever selects the greedy action during training",
        "Model-based, because it requires the transition probabilities p(s'|s,a)"
      ],
      correct: 0,
      why: [
        "Correct — the target uses max_{a'}Q(s',a'), the greedy policy's value, even if the behavior policy that generated the data explores (e.g. via ε-greedy). Target policy ≠ behavior policy.",
        "Q-learning typically explores (e.g. ε-greedy) during training while its update targets the greedy policy — that mismatch is exactly what makes it off-policy.",
        "Q-learning is model-free: it learns from sampled transitions (s,a,r,s') without needing p(s'|s,a)."
      ]
    },
    {
      q: "In RL, 'on-policy' vs 'off-policy' refers to:",
      options: [
        "Whether the policy being learned/evaluated is the same one used to generate the training data",
        "Whether the algorithm uses a neural network or a lookup table",
        "Whether the environment has continuous or discrete actions"
      ],
      correct: 0,
      why: [
        "Correct — on-policy methods (like SARSA) evaluate/improve the same policy that collects data; off-policy methods (like Q-learning) can learn about a different target policy than the behavior policy.",
        "Function approximation choice (tabular vs. neural network) is orthogonal to on-/off-policy distinctions.",
        "Action space type (continuous vs. discrete) is unrelated to whether a method is on- or off-policy."
      ]
    },
    {
      q: "Why does pure greedy action selection (always pick argmax Q) tend to perform poorly during learning?",
      options: [
        "It never explores, so it can get stuck exploiting a suboptimal action whose true value was underestimated",
        "It requires far more compute than any exploration strategy",
        "It only works when rewards are strictly negative"
      ],
      correct: 0,
      why: [
        "Correct — without exploration, early inaccurate estimates can permanently prevent the agent from discovering better actions.",
        "Greedy selection is actually cheaper computationally than most exploration schemes; compute isn't the issue.",
        "Greedy selection has nothing to do with reward sign; the problem is purely about lack of exploration."
      ]
    },
    {
      q: "In ε-greedy exploration, what happens with probability ε?",
      options: [
        "The agent picks a random action instead of the current best (greedy) action",
        "The agent switches to a completely different reward function",
        "The agent resets all of its Q-value estimates to zero"
      ],
      correct: 0,
      why: [
        "Correct — ε-greedy exploits the greedy action with probability 1−ε and explores via a uniformly random action with probability ε.",
        "ε-greedy has nothing to do with changing the reward function; the reward signal stays fixed.",
        "Q-values persist across steps; ε-greedy only affects action selection, not the stored estimates."
      ]
    },
    {
      q: "Softmax (Boltzmann) exploration differs from ε-greedy in that it:",
      options: [
        "Weights action-selection probability by relative Q-value, so better-looking actions are explored more than clearly bad ones",
        "Never selects any action other than the single best one",
        "Requires a discrete, finite, and very small action space to function at all"
      ],
      correct: 0,
      why: [
        "Correct — softmax turns Q-values into a probability distribution (via a temperature parameter), giving graded exploration instead of ε-greedy's uniform random exploration among all non-greedy actions.",
        "That describes pure greedy selection, the opposite of an exploration strategy.",
        "Softmax can be applied to any discrete action space size, though it does need actions to be enumerable to normalize the distribution."
      ]
    },
    {
      q: "What is the purpose of n-step returns in TD learning?",
      options: [
        "They interpolate between one-step TD and full Monte Carlo returns, trading off bias and variance",
        "They eliminate the need for a discount factor entirely",
        "They only apply when the environment is fully deterministic"
      ],
      correct: 0,
      why: [
        "Correct — n-step returns sum n real rewards then bootstrap, sitting on a spectrum from TD(0) (n=1) to MC (n=∞).",
        "Discounting is still applied within the n-step sum; it isn't removed.",
        "n-step returns work in stochastic environments too — they're a general prediction technique, not deterministic-only."
      ]
    },
    {
      q: "TD(λ) and eligibility traces are used to:",
      options: [
        "Efficiently blend information from many n-step returns using a single decaying trace per state, controlled by λ",
        "Guarantee the policy is always fully greedy",
        "Replace the need for a reward function"
      ],
      correct: 0,
      why: [
        "Correct — eligibility traces implement TD(λ), an elegant mechanistic way to combine multiple n-step backups without storing every n separately.",
        "TD(λ) is a prediction/credit-assignment mechanism; it says nothing about how actions are chosen (that's a separate exploration policy).",
        "Rewards are still required as the core learning signal; TD(λ) just changes how credit is propagated across time."
      ]
    },
    {
      q: "Why is function approximation (e.g. neural networks) needed in many RL problems?",
      options: [
        "State (and/or action) spaces can be too large or continuous to represent with a table of values for each state",
        "It's required to make Q-learning off-policy",
        "It removes the need for an exploration strategy"
      ],
      correct: 0,
      why: [
        "Correct — tabular methods don't scale to huge or continuous spaces (e.g. images, robot joint angles), so a parameterized function generalizes across similar states.",
        "Q-learning is off-policy regardless of whether it's tabular or uses function approximation; that's determined by the update rule, not the representation.",
        "Exploration is still needed with function approximation — the two concerns are independent."
      ]
    },
    {
      q: "The 'deadly triad' in RL refers to the instability risk from combining:",
      options: [
        "Function approximation, bootstrapping, and off-policy learning",
        "Sparse rewards, long episodes, and small learning rates",
        "Discrete actions, tabular value functions, and on-policy learning"
      ],
      correct: 0,
      why: [
        "Correct — Sutton & Barto identify these three together (e.g. Q-learning with a neural net on off-policy data) as prone to divergence.",
        "Those factors can make learning slow or hard, but they aren't the specific combination Sutton & Barto call the deadly triad.",
        "Tabular, on-policy methods are actually the *safe* combination — the deadly triad is about their opposites."
      ]
    },
    {
      q: "What was a key innovation of DQN (Deep Q-Network) for stabilizing Q-learning with neural networks?",
      options: [
        "Using a replay buffer of past transitions and a separate, slowly-updated target network",
        "Removing the discount factor to simplify the Bellman target",
        "Training exclusively on-policy with no exploration"
      ],
      correct: 0,
      why: [
        "Correct — experience replay breaks correlations between consecutive samples, and a fixed target network stabilizes the bootstrapped target that Q-learning regresses toward.",
        "DQN still uses a discount factor γ; removing it isn't part of the innovation.",
        "DQN is off-policy (like Q-learning) and still explores, typically via ε-greedy, during data collection."
      ]
    },
    {
      q: "Why does experience replay help train DQN?",
      options: [
        "It breaks the strong temporal correlation between consecutive transitions and lets the agent reuse past data efficiently",
        "It guarantees the policy found is globally optimal",
        "It removes the need for a reward signal"
      ],
      correct: 0,
      why: [
        "Correct — sampling random mini-batches from a buffer of past experience decorrelates updates (violating i.i.d. assumptions less) and improves sample efficiency by reuse.",
        "Replay improves stability and efficiency, but gives no optimality guarantee, especially with function approximation.",
        "The reward is still stored in each transition and is essential to computing the TD target."
      ]
    },
    {
      q: "Why does a separate 'target network' help stabilize DQN training?",
      options: [
        "It keeps the bootstrapped target r + γ max_a' Q(s',a') fixed for a while, so the network isn't chasing a constantly-moving target",
        "It doubles the effective learning rate for faster convergence",
        "It removes the max operator from the Q-learning update"
      ],
      correct: 0,
      why: [
        "Correct — without it, both the prediction and its own target shift together every update, which can cause oscillation or divergence; periodically freezing/copying weights into a target network mitigates this.",
        "A target network doesn't change the learning rate; it changes what the target values are computed from.",
        "The max over next-state actions is still used to form the target — the target network just supplies more stable Q-values for that computation."
      ]
    },
    {
      q: "Policy gradient methods differ fundamentally from value-based methods (like Q-learning) because they:",
      options: [
        "Directly parameterize and optimize the policy via gradient ascent on expected return, rather than deriving a policy from value estimates",
        "Never require any notion of reward",
        "Can only be applied to environments with a single possible action"
      ],
      correct: 0,
      why: [
        "Correct — policy gradient methods adjust policy parameters θ to increase expected return directly, instead of learning Q-values and acting greedily w.r.t. them.",
        "Reward is still the core training signal used to compute the gradient estimate.",
        "Policy gradient methods handle arbitrarily large or continuous action spaces — a key motivation for using them."
      ]
    },
    {
      q: "REINFORCE updates policy parameters using a gradient estimate that involves:",
      options: [
        "The log-probability of the taken action multiplied by the observed return from that point on",
        "The second derivative (Hessian) of the value function",
        "A fixed learning-rate schedule and nothing derived from the trajectory"
      ],
      correct: 0,
      why: [
        "Correct — REINFORCE's gradient estimate is ∇θ log π(a|s;θ) · G_t, scaling the log-prob gradient by the return, a Monte Carlo policy gradient method.",
        "REINFORCE is a first-order method; it doesn't require second derivatives.",
        "The update is explicitly derived from the sampled trajectory's actions and returns, not from the learning rate alone."
      ]
    },
    {
      q: "Why do policy gradient methods commonly subtract a baseline (like V(s)) from the return?",
      options: [
        "To reduce the variance of the gradient estimate without introducing bias",
        "To make the policy fully deterministic",
        "To eliminate the need for a discount factor"
      ],
      correct: 0,
      why: [
        "Correct — subtracting any state-dependent baseline that doesn't depend on the action leaves the gradient's expectation unchanged while typically reducing variance substantially.",
        "Baselines affect gradient variance, not whether the policy distribution collapses to deterministic.",
        "The discount factor is unrelated to baseline subtraction; both can be used together."
      ]
    },
    {
      q: "In an actor-critic architecture, what do the 'actor' and 'critic' each do?",
      options: [
        "The actor selects actions (the policy); the critic estimates a value function to evaluate the actor's choices",
        "The actor stores past transitions; the critic executes actions in the environment",
        "The actor and critic are two identical copies of the same value network"
      ],
      correct: 0,
      why: [
        "Correct — the actor is the parameterized policy π(a|s;θ), and the critic (e.g. V(s) or Q(s,a)) provides a lower-variance learning signal for updating it.",
        "That description is reversed and doesn't match the actor-critic roles; replay buffers and environment execution aren't what defines actor vs critic.",
        "Actor and critic are distinct networks serving different purposes (policy vs. value), not duplicates of each other."
      ]
    },
    {
      q: "The advantage function A(s,a) is defined as:",
      options: [
        "Q(s,a) − V(s), how much better an action is than the policy's average action at that state",
        "Q(s,a) + V(s), the total value of taking an action",
        "The discount factor multiplied by the reward"
      ],
      correct: 0,
      why: [
        "Correct — A(s,a) measures the relative benefit of action a versus the expected value under the current policy at s.",
        "Advantage is a difference, not a sum, of Q and V.",
        "The discount factor isn't part of the advantage function's definition."
      ]
    },
    {
      q: "What does Generalized Advantage Estimation (GAE) primarily provide?",
      options: [
        "A tunable parameter λ that blends multiple n-step advantage estimates to trade off bias and variance",
        "A method for discretizing continuous action spaces",
        "A guarantee that the policy gradient has zero variance"
      ],
      correct: 0,
      why: [
        "Correct — GAE, much like TD(λ), exponentially weights n-step advantage estimates via λ, letting practitioners tune the bias-variance tradeoff for policy gradient methods.",
        "GAE is about advantage estimation, not action space discretization.",
        "GAE reduces variance but doesn't eliminate it entirely; some variance remains from sampling."
      ]
    },
    {
      q: "PPO's clipped surrogate objective is designed to:",
      options: [
        "Prevent the new policy from moving too far from the old policy in a single update, without the complexity of TRPO's constrained optimization",
        "Force the policy to always be fully deterministic",
        "Remove the value function/critic from training entirely"
      ],
      correct: 0,
      why: [
        "Correct — by clipping the probability ratio π_new/π_old, PPO discourages destructively large policy updates using simple first-order optimization.",
        "PPO can still learn stochastic policies; clipping controls update size, not policy determinism.",
        "PPO typically still uses a critic/value function (e.g. for computing advantages via GAE); it doesn't remove it."
      ]
    },
    {
      q: "TRPO (Trust Region Policy Optimization) constrains policy updates by:",
      options: [
        "Limiting the KL divergence between the old and new policy within a trust region",
        "Capping the total number of neurons in the policy network",
        "Disabling exploration after the first training epoch"
      ],
      correct: 0,
      why: [
        "Correct — TRPO solves a constrained optimization problem, maximizing expected improvement subject to a KL-divergence bound between successive policies.",
        "Network architecture size isn't what TRPO's trust region constrains.",
        "TRPO doesn't specifically disable exploration; exploration typically still comes from the policy's own stochasticity throughout training."
      ]
    },
    {
      q: "Adding an entropy bonus to a policy gradient objective encourages:",
      options: [
        "More exploration, by penalizing the policy for becoming overly deterministic too quickly",
        "Faster convergence to a purely greedy, deterministic policy",
        "The value function to ignore future rewards"
      ],
      correct: 0,
      why: [
        "Correct — maximizing entropy alongside return keeps the action distribution more spread out, sustaining exploration and helping avoid premature convergence.",
        "Entropy bonuses push in the opposite direction — toward more randomness, not faster determinism.",
        "Entropy regularization affects the policy's action distribution, not the value function's discounting behavior."
      ]
    },
    {
      q: "DDPG (Deep Deterministic Policy Gradient) was designed mainly to handle:",
      options: [
        "Continuous action spaces, where taking an explicit max_a Q(s,a) (as in Q-learning) is intractable",
        "Purely tabular environments with a handful of discrete states",
        "Environments with no reward signal whatsoever"
      ],
      correct: 0,
      why: [
        "Correct — DDPG pairs a deterministic actor with a critic, using the actor to approximate argmax_a Q(s,a) since exact maximization is infeasible over continuous actions.",
        "DDPG is designed for large/continuous spaces where tabular methods break down, not small discrete ones.",
        "DDPG still requires a reward signal to train its critic via TD updates, like other RL methods."
      ]
    },
    {
      q: "Why can't standard Q-learning be applied directly to continuous action spaces?",
      options: [
        "Computing max_a Q(s,a) exactly requires optimizing over infinitely many possible actions",
        "Continuous actions always produce zero reward",
        "Q-learning requires the discount factor to be exactly 1"
      ],
      correct: 0,
      why: [
        "Correct — the greedy action selection/target computation in Q-learning assumes you can enumerate or exactly maximize over actions, which isn't tractable when actions are continuous — motivating actor-critic methods like DDPG/TD3/SAC.",
        "Reward has nothing to do with whether actions are continuous or discrete.",
        "γ=1 isn't required by Q-learning, and even γ<1 doesn't solve the continuous-max problem."
      ]
    },
    {
      q: "Importance sampling is used in off-policy RL to:",
      options: [
        "Reweight returns/updates collected under a behavior policy so they give an unbiased estimate for a different target policy",
        "Increase the discount factor automatically over time",
        "Convert a stochastic policy into a deterministic one"
      ],
      correct: 0,
      why: [
        "Correct — importance sampling ratios (target policy probability / behavior policy probability) correct for the mismatch between the data-generating policy and the policy being evaluated.",
        "Importance sampling doesn't touch the discount factor; γ is set independently as part of the MDP/objective.",
        "It's a statistical reweighting technique, not a mechanism for changing policy stochasticity."
      ]
    },
    {
      q: "The 'credit assignment problem' in RL refers to the challenge of:",
      options: [
        "Determining which past actions in a long trajectory were actually responsible for a later observed reward",
        "Assigning a monetary budget for cloud compute during training",
        "Choosing which team member gets credit for the trained model"
      ],
      correct: 0,
      why: [
        "Correct — because rewards can be delayed, it's hard to know which of many prior actions caused a later reward; methods like eligibility traces and n-step returns help address this.",
        "This is unrelated to compute budgeting.",
        "This is a well-known technical RL term about temporal cause-and-effect, not team attribution."
      ]
    },
    {
      q: "What is a risk of naive reward shaping (adding auxiliary rewards to speed up learning)?",
      options: [
        "It can unintentionally change the optimal policy if the shaping isn't potential-based",
        "It always makes training slower with no other side effects",
        "It removes the need for a discount factor"
      ],
      correct: 0,
      why: [
        "Correct — poorly designed shaping rewards can create loopholes the agent exploits, altering which policy is truly optimal; potential-based shaping is designed to avoid this.",
        "Reward shaping is usually intended to speed up learning; its risk is changing behavior/optimality, not merely slowing things down.",
        "Reward shaping and discounting are independent design choices."
      ]
    },
    {
      q: "The key distinction between model-based and model-free RL is:",
      options: [
        "Model-based methods learn or use a model of transitions/rewards to plan; model-free methods learn values/policies directly from experience",
        "Model-based methods never use neural networks",
        "Model-free methods require the reward function to be known in advance"
      ],
      correct: 0,
      why: [
        "Correct — model-based RL (e.g. using learned dynamics for planning, like MCTS or Dyna) leverages a model of the environment, while model-free RL (like Q-learning, policy gradients) skips modeling dynamics and learns directly from trial-and-error.",
        "Both model-based and model-free approaches can and do use neural networks (e.g. AlphaZero uses both a model and networks).",
        "Model-free methods learn the reward signal from experience (observed rewards); they don't require it to be specified as a known function in advance."
      ]
    },
    {
      q: "Why is Monte Carlo return considered 'unbiased' compared to TD targets?",
      options: [
        "MC uses the actual sampled return, while TD substitutes a bootstrapped estimate that may itself be inaccurate",
        "MC always converges faster than TD in every environment",
        "MC doesn't require any exploration"
      ],
      correct: 0,
      why: [
        "Correct — since MC's target is the true observed return under the current policy (in expectation), it has no bias from a bootstrapped estimate — though it does have higher variance.",
        "TD methods are typically more sample-efficient and update faster online than MC, which needs full episodes; MC isn't universally faster.",
        "MC still requires exploration to visit varied states/actions, same as TD."
      ]
    }
  ]
};
