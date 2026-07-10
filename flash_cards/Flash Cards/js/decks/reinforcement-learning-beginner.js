// Reinforcement Learning flashcard deck — Beginner / high-level track
// Focus: when to use RL, reward design, core vocabulary, no equations.
window.FLASHCARD_DECKS = window.FLASHCARD_DECKS || {};
window.FLASHCARD_DECKS["reinforcement-learning-beginner"] = {
  title: "Reinforcement Learning — Beginner",
  shortLabel: "Beginner",
  cards: [
    {
      q: "In one line, what is reinforcement learning (RL)?",
      options: [
        "Learning by trial and error, guided by reward feedback from an environment",
        "Learning to predict labels by studying a fixed set of labeled examples",
        "Learning to group similar data points together, with no feedback signal"
      ],
      correct: 0,
      why: [
        "Correct — RL is about an agent interacting with an environment, taking actions, and learning from the rewards (or penalties) those actions produce.",
        "That's supervised learning — it relies on labeled input/output pairs, not trial-and-error feedback.",
        "That's unsupervised learning (e.g. clustering) — there's no reward or feedback signal at all."
      ]
    },
    {
      q: "How does RL fundamentally differ from supervised learning?",
      options: [
        "RL learns from reward feedback, not a labeled answer per input",
        "RL never uses any form of data during training",
        "RL only works when you have millions of labeled examples"
      ],
      correct: 0,
      why: [
        "Correct — instead of being told the right answer directly, an RL agent has to discover good behavior from reward signals over time.",
        "RL still uses data — experience the agent generates by interacting with an environment — it just isn't labeled the way supervised data is.",
        "RL typically needs no pre-labeled dataset at all; it generates its own experience through interaction."
      ]
    },
    {
      q: "Which of these problems is the best natural fit for RL?",
      options: [
        "Teaching a robot arm a multi-step task where each action sets up the next",
        "Predicting tomorrow's house price from square footage and location",
        "Sorting a folder of emails into 'spam' or 'not spam'"
      ],
      correct: 0,
      why: [
        "Correct — RL shines on sequential decision problems where actions affect future states, and success is measured by an outcome over time, not a single prediction.",
        "That's a one-shot regression problem — you predict a number from features. It's a great fit for supervised learning, not RL.",
        "That's a classification problem with a clear correct label per email — supervised learning is the natural tool, not RL."
      ]
    },
    {
      q: "What's a defining feature that makes a problem 'sequential decision-making,' well suited to RL?",
      options: [
        "Each action changes the situation, so future choices depend on earlier ones",
        "Every decision is made completely independently of all others",
        "The correct answer is already known in advance for every situation"
      ],
      correct: 0,
      why: [
        "Correct — in sequential decision problems (like playing a game or controlling a robot), today's action shapes tomorrow's options, which is exactly what RL is designed to handle.",
        "If decisions were fully independent with no carryover effects, you'd typically just solve each one separately rather than needing RL.",
        "If the correct answer were already known, you wouldn't need trial-and-error learning at all — you could just supervise directly."
      ]
    },
    {
      q: "Why might RL be a poor choice for a problem, even if it's technically a sequential task?",
      options: [
        "When real mistakes are costly or dangerous and can't be safely simulated",
        "Because RL always requires more labeled data than supervised learning",
        "Because RL can only be applied to board games"
      ],
      correct: 0,
      why: [
        "Correct — RL agents typically need many attempts (including failures) to learn; that's risky or expensive without a safe simulator (e.g. a real self-driving car crashing repeatedly is unacceptable).",
        "RL doesn't rely on labeled data the way supervised learning does — this isn't the limiting factor.",
        "RL is used far beyond games — robotics, recommendation systems, resource allocation, and more."
      ]
    },
    {
      q: "Why do many successful RL projects (like game-playing agents) rely heavily on simulators?",
      options: [
        "They let the agent try many attempts quickly and safely",
        "Simulators are required by law for any RL research",
        "Simulators eliminate the need for a reward function"
      ],
      correct: 0,
      why: [
        "Correct — RL often needs thousands or millions of attempts to learn well; simulators make that fast, cheap, and safe compared to acting in the real world.",
        "There's no such legal requirement — simulators are a practical convenience, not a rule.",
        "A reward function is still essential inside a simulator; the simulator just provides a safe place to act and receive that reward."
      ]
    },
    {
      q: "Which is a realistic real-world application of RL?",
      options: [
        "Tuning a recommender as user clicks shape its next suggestions",
        "Reading a scanned document and converting it to text",
        "Identifying whether a photo contains a cat or a dog"
      ],
      correct: 0,
      why: [
        "Correct — recommendations play out over a sequence of interactions, and the system can adjust its strategy based on the reward signal of user engagement.",
        "That's optical character recognition (OCR), a supervised learning task with no sequential decision-making involved.",
        "That's image classification — a single-shot prediction task, a classic supervised learning use case."
      ]
    },
    {
      q: "In RL terminology, the 'agent' is:",
      options: [
        "The decision-maker that observes the situation and chooses actions",
        "The numeric score the learner is trying to maximize over time",
        "The external system the decision-maker interacts with"
      ],
      correct: 0,
      why: [
        "Correct — the agent is whoever (or whatever) is doing the learning and choosing actions, like the robot, game-playing program, or trading algorithm.",
        "That describes the reward, not the agent.",
        "That describes the environment, not the agent."
      ]
    },
    {
      q: "In RL terminology, the 'environment' is:",
      options: [
        "The outside world the agent acts on and gets feedback from",
        "The internal strategy the agent uses to pick actions",
        "The total score accumulated at the end of training"
      ],
      correct: 0,
      why: [
        "Correct — the environment is the world the agent acts within: it responds to the agent's actions with new situations and rewards.",
        "That describes the agent's policy, not the environment.",
        "That's closer to a return or cumulative reward, not the environment itself."
      ]
    },
    {
      q: "In RL terminology, a 'state' refers to:",
      options: [
        "A snapshot of the current situation the agent finds itself in",
        "The complete list of every action the agent has ever taken",
        "The final outcome of an entire training run"
      ],
      correct: 0,
      why: [
        "Correct — the state describes 'what's going on right now' (e.g. a robot's position, a game board layout) that the agent uses to decide what to do next.",
        "That would be closer to a history or trajectory, not a single state.",
        "That describes a training result, not a state."
      ]
    },
    {
      q: "In RL terminology, the 'reward' is:",
      options: [
        "Feedback from the environment after an action, signaling how good it was",
        "The agent's internal strategy for choosing actions",
        "A fixed label telling the agent the objectively 'correct' action for every state"
      ],
      correct: 0,
      why: [
        "Correct — the reward is the number the agent tries to maximize over time; it's how the environment communicates 'good move' or 'bad move.'",
        "That describes the policy, not the reward.",
        "RL deliberately avoids requiring a labeled 'correct action' — that's the supervised learning setup, not RL."
      ]
    },
    {
      q: "A 'policy' in RL refers to:",
      options: [
        "The agent's strategy for choosing an action given its current state",
        "The rules an environment designer writes to compute rewards",
        "A log of every reward received during training"
      ],
      correct: 0,
      why: [
        "Correct — the policy is essentially the agent's behavior: given a state, what action does it take (or what probabilities does it assign to each action)?",
        "That describes the reward function, a separate piece of the problem setup that the designer creates, not the agent's learned strategy.",
        "That's closer to a training log, not the policy itself."
      ]
    },
    {
      q: "An 'episode' in RL is best described as:",
      options: [
        "One full run of agent–environment interaction, start to finish",
        "A single action the agent takes at one step",
        "The total count of agents trained during the experiment"
      ],
      correct: 0,
      why: [
        "Correct — think of an episode like one playthrough of a game: it has a beginning and an end, and the agent usually learns from many episodes.",
        "A single action is just one step within an episode, not the whole episode.",
        "That's unrelated — an episode is about the length of one interaction sequence, not the number of agents."
      ]
    },
    {
      q: "Roughly speaking, a 'value' (as in a state's value) captures:",
      options: [
        "How good a situation is, given the rewards likely to follow",
        "The exact dollar cost of running the RL experiment",
        "The number of possible actions available in that situation"
      ],
      correct: 0,
      why: [
        "Correct — value estimates 'how promising' a state is in the long run, not just what reward you'd get right this instant.",
        "That's an unrelated, informal meaning of 'value' — nothing to do with RL's technical use of the term.",
        "That describes the size of the action space, a different concept from value."
      ]
    },
    {
      q: "What is the main purpose of a reward function?",
      options: [
        "To state, as a number, the goal you want the agent to reach",
        "To make training run faster on any given hardware",
        "To remove the need for an environment entirely"
      ],
      correct: 0,
      why: [
        "Correct — the reward function is how you tell the agent what 'success' looks like; the agent will optimize for exactly what you reward, so it needs to reflect your true goal.",
        "Reward design affects what's learned, not raw compute speed.",
        "A reward function is meaningless without an environment for the agent to act in — they work together, not as substitutes."
      ]
    },
    {
      q: "What's the key tradeoff between sparse and dense rewards?",
      options: [
        "Sparse rewards are simple to specify but hard to learn from; dense, the reverse",
        "Sparse rewards always train faster and are simpler to design than dense ones",
        "Dense rewards remove the agent's need to explore during learning"
      ],
      correct: 0,
      why: [
        "Correct — sparse rewards are easy to define correctly (e.g. '+1 only if you win') but give little guidance along the way; dense rewards give constant feedback but are easy to design badly, encouraging unintended shortcuts.",
        "Sparse rewards are usually slower to learn from precisely because feedback is rare — the opposite of 'always faster.'",
        "Even with frequent reward feedback, the agent still needs to explore to discover which actions lead to good outcomes."
      ]
    },
    {
      q: "What is 'reward hacking'?",
      options: [
        "Finding a way to score high reward without achieving the real goal",
        "When a human manually overrides the agent's actions during training",
        "When the reward function is deleted partway through training"
      ],
      correct: 0,
      why: [
        "Correct — a classic example: an agent playing a boat-racing game learned to spin in circles collecting bonus items for points instead of finishing the race, because that maximized the score it was given.",
        "That's manual intervention, unrelated to the concept of reward hacking.",
        "Reward hacking is about exploiting a flawed reward signal, not about the reward function disappearing."
      ]
    },
    {
      q: "Why is 'reward what you actually want, not what's easy to measure' good advice?",
      options: [
        "Optimizing an easy proxy can miss the real goal it's standing in for",
        "Because easy-to-measure rewards always take longer to compute",
        "Because agents can't process numeric reward signals at all"
      ],
      correct: 0,
      why: [
        "Correct — for example, rewarding 'distance moved' instead of 'reached the goal safely' might teach a robot to move fast and recklessly rather than actually completing the task well.",
        "Compute time isn't the concern here — it's about whether the metric truly reflects the intended goal.",
        "Numeric reward signals are exactly what agents are built to use — that's the whole mechanism of RL."
      ]
    },
    {
      q: "A cleaning robot is rewarded '+1 point per piece of trash picked up.' What unintended behavior might this encourage?",
      options: [
        "It could drop and re-grab the same trash to rack up points",
        "The robot will always clean the room perfectly with no downsides",
        "The robot will refuse to pick up any trash at all"
      ],
      correct: 0,
      why: [
        "Correct — this is a classic reward-hacking risk: the reward tracks 'pickup events' rather than 'trash actually removed,' so re-picking-up the same item is a loophole that maximizes reward without achieving the real goal.",
        "Rewards phrased this way are exactly the kind that tend to produce loopholes, not guaranteed good behavior.",
        "Since picking up trash is directly rewarded, the robot has every incentive to do it — just not necessarily in the way you intended."
      ]
    },
    {
      q: "What risk comes from writing an extremely detailed reward function that specifies a reward for every tiny sub-behavior?",
      options: [
        "More reward terms mean more loopholes for unintended behavior",
        "The agent will simply ignore the extra reward terms",
        "It always guarantees the agent learns faster with no downsides"
      ],
      correct: 0,
      why: [
        "Correct — the more fine-grained rules you add, the more surface area there is for the agent to find unexpected ways to rack up reward without doing what you intended; simpler, well-chosen rewards are often safer.",
        "Agents optimize for whatever is rewarded — extra terms won't be ignored, they'll actively shape behavior, for better or worse.",
        "Complex, over-specified rewards frequently backfire rather than reliably speeding up learning."
      ]
    },
    {
      q: "What's the idea behind 'reward shaping' (giving the agent partial credit along the way)?",
      options: [
        "Adding small intermediate rewards to guide learning, not just the outcome",
        "Removing the reward function entirely once training starts",
        "Giving the agent full credit for the goal from the very first attempt"
      ],
      correct: 0,
      why: [
        "Correct — for a maze-solving agent, you might reward getting closer to the exit, not just reaching it, so learning is faster — though shaping must be designed carefully to avoid creating loopholes.",
        "Reward shaping adds signal, it doesn't remove the reward function.",
        "Reward shaping is about giving useful partial credit during learning, not simply awarding full credit upfront (which would defeat the purpose of learning at all)."
      ]
    },
    {
      q: "Why might a reward focused only on immediate/short-term outcomes cause problems?",
      options: [
        "A choice that looks good now can lead to worse outcomes later",
        "Short-term rewards always produce the same behavior as long-term rewards",
        "Short-term rewards make the environment stop responding to actions"
      ],
      correct: 0,
      why: [
        "Correct — for example, an agent rewarded only for 'grabbing an item quickly' might grab it in a way that damages it or blocks a better future move, since it isn't accounting for what happens next.",
        "Short-term and long-term reward framing can lead to meaningfully different behavior — that's precisely why the distinction matters.",
        "The reward doesn't affect whether the environment responds to actions — it only affects what behavior the agent is pushed toward."
      ]
    },
    {
      q: "Why are penalties (negative rewards) sometimes added, alongside positive rewards, in a reward function?",
      options: [
        "To actively discourage unsafe or wasteful behaviors",
        "Penalties are purely decorative and don't affect learning",
        "Because RL agents cannot function unless every reward is negative"
      ],
      correct: 0,
      why: [
        "Correct — e.g. a small penalty for excessive energy use or unsafe maneuvers pushes the agent away from those behaviors, complementing the positive rewards that pull it toward good ones.",
        "Penalties directly shape the agent's behavior, same as positive rewards — they're a functional part of the signal, not decoration.",
        "RL works fine with all-positive, all-negative, or mixed reward signals — there's no such requirement."
      ]
    },
    {
      q: "What is the 'exploration vs. exploitation' tradeoff, in plain terms?",
      options: [
        "Trying something new that might be better vs. sticking with what works",
        "Deciding how many CPU cores to allocate to training",
        "Deciding whether to use RL or supervised learning for a project"
      ],
      correct: 0,
      why: [
        "Correct — like choosing between your favorite restaurant (exploit) and trying a new one that might be even better (explore), the agent must balance gathering new information against using what it already knows.",
        "That's a computing-resource decision, unrelated to exploration vs. exploitation.",
        "That's a different, higher-level decision about which learning paradigm to use, not this specific tradeoff."
      ]
    },
    {
      q: "Why can't an agent just exploit (always pick its current best-known action) from the very start of training?",
      options: [
        "Early best guesses are often wrong before enough actions are tried",
        "Exploitation is technically impossible to implement in code",
        "Exploiting from the start always causes the environment to crash"
      ],
      correct: 0,
      why: [
        "Correct — without exploring first, the agent risks locking onto a mediocre strategy simply because it never tried the better alternatives.",
        "Exploitation is easy to implement — always pick the best-known action; the issue is purely about learning quality, not feasibility.",
        "This is about learning outcomes, not technical stability of the environment."
      ]
    },
    {
      q: "In plain language, what does the 'discount factor' control in RL?",
      options: [
        "How much the agent weighs future rewards vs. immediate ones",
        "How many actions the agent is allowed to take per second",
        "How much memory the training program is allowed to use"
      ],
      correct: 0,
      why: [
        "Correct — a high discount factor makes the agent 'far-sighted,' caring a lot about long-term payoff; a low one makes it 'short-sighted,' focused mostly on immediate reward.",
        "That's an unrelated engineering constraint, not what the discount factor represents.",
        "That's a hardware/memory concern, not a concept from the reward/value framework."
      ]
    },
    {
      q: "An agent that's too 'short-sighted' (heavily discounts future rewards) risks:",
      options: [
        "Choosing actions that pay off now but hurt long-term outcomes",
        "Never taking any action in the environment",
        "Achieving a perfect score in every environment automatically"
      ],
      correct: 0,
      why: [
        "Correct — like eating dessert before dinner every night, a short-sighted agent optimizes for the here-and-now, potentially missing out on much bigger rewards it could get by planning ahead.",
        "A short-sighted agent still acts; it just weighs near-term payoff more heavily than long-term payoff.",
        "There's no such automatic guarantee — being short-sighted is generally a weakness, not a strength."
      ]
    },
    {
      q: "Why is RL often described as 'sample inefficient' compared to some other machine learning approaches?",
      options: [
        "It needs many trial-and-error attempts before behavior gets good",
        "It requires no data of any kind in order to train",
        "It can only ever be trained on a single example before stopping"
      ],
      correct: 0,
      why: [
        "Correct — because the agent must discover good behavior through its own experience (rather than being handed labeled examples), it often needs vastly more interaction than a supervised model would need labeled data.",
        "RL absolutely needs data — specifically, experience gathered by interacting with an environment.",
        "RL training typically involves many episodes of interaction, not just one example."
      ]
    },
    {
      q: "Why is applying RL directly in physical, real-world safety-critical settings (like self-driving cars) especially challenging?",
      options: [
        "Real-world mistakes have real consequences, unlike in a simulator",
        "Physical environments can't produce any reward signal",
        "RL algorithms cannot run on any hardware installed in a vehicle"
      ],
      correct: 0,
      why: [
        "Correct — this is why such systems are often trained extensively in simulation first, with careful attention to safety constraints, before any real-world deployment.",
        "Physical environments absolutely can provide reward signals (e.g. distance traveled safely, fuel efficiency) — that's not the obstacle.",
        "RL algorithms run on standard computing hardware and are deployed in real systems; the challenge is the safety of trial-and-error learning itself, not hardware compatibility."
      ]
    },
    {
      q: "What is RLHF (Reinforcement Learning from Human Feedback), at a high level?",
      options: [
        "Using human preferences to train a reward signal that then guides RL",
        "A method that replaces all reward functions with pure random noise",
        "A rule that all RL environments must be designed by humans, never generated by a computer"
      ],
      correct: 0,
      why: [
        "Correct — instead of hand-coding a reward function, humans provide feedback (e.g. which of two answers they prefer), and that feedback is used to build a reward signal used to further train the model.",
        "RLHF is about learning a meaningful reward from human judgments, the opposite of noise.",
        "This isn't a rule about environment design — RLHF specifically concerns learning a reward signal from human preference data."
      ]
    },
    {
      q: "During early (pre-)training of a large language model, what is the main training objective?",
      options: [
        "Self-supervised next-token prediction — guessing the next word in vast amounts of text",
        "Directly maximizing scores from human preference ratings on the model's answers",
        "Trial-and-error exploration of a simulated environment to maximize a reward signal"
      ],
      correct: 0,
      why: [
        "Correct — pretraining teaches broad language and world knowledge purely by predicting missing/next text, with no human feedback loop yet.",
        "That's the post-training objective (e.g. RLHF), which comes later and depends on a model that already has broad language ability from pretraining.",
        "That describes classic RL in a simulated environment, not how language model pretraining works — there's no environment or action-taking here."
      ]
    },
    {
      q: "What kind of data is typically used during early (pre-)training of a large language model?",
      options: [
        "A massive, broad collection of unlabeled text and code from many sources",
        "A small, hand-curated set of human preference comparisons between pairs of answers",
        "Only reward signals collected from an agent acting in a simulator"
      ],
      correct: 0,
      why: [
        "Correct — pretraining is designed to expose the model to as much varied language and knowledge as possible, so scale and diversity matter more than curation at this stage.",
        "Preference comparisons are the kind of data used much later, during post-training/alignment — not during pretraining.",
        "Pretraining doesn't involve an environment or reward signals at all; it's self-supervised learning directly from text."
      ]
    },
    {
      q: "What best describes the objective typically emphasized during 'mid-training' (continued pretraining on more curated data)?",
      options: [
        "Keep the language-modeling objective, but on higher-quality, curated data",
        "Switch entirely to learning from human preference comparisons",
        "Train a value function to estimate long-term reward for each possible action"
      ],
      correct: 0,
      why: [
        "Correct — mid-training still predicts text, but shifts the mix toward cleaner, more targeted data (e.g. textbooks, curated code, specific domains) to boost quality beyond what raw web-scale pretraining alone provides.",
        "That shift toward preference data happens in post-training, not mid-training.",
        "Estimating long-term reward per action is a value-function concept from classic RL control problems, not part of language model mid-training."
      ]
    },
    {
      q: "How does the data used in mid-training typically differ from the data used in early pretraining?",
      options: [
        "A smaller, more curated, higher-quality or domain-focused slice of data",
        "It consists entirely of reward scores with no text at all",
        "It's identical to pretraining data in every way, just repeated more times"
      ],
      correct: 0,
      why: [
        "Correct — mid-training trades some of pretraining's raw scale and diversity for better-filtered, more relevant data, aiming to improve specific capabilities efficiently.",
        "Mid-training data is still text/code the model learns to predict — reward scores aren't part of this stage.",
        "The whole point of adjusting the data mix in mid-training is that it's meaningfully different (more curated/targeted), not just a repeat of the same pretraining data."
      ]
    },
    {
      q: "What is the main objective during post-training (instruction tuning plus RLHF/RLAIF)?",
      options: [
        "Align behavior with human intent — helpful, safe, in a preferred style",
        "Expose the model to as much raw, unlabeled internet text as possible for the first time",
        "Purely maximize the size of the model's vocabulary"
      ],
      correct: 0,
      why: [
        "Correct — post-training takes a model that already knows a lot from pretraining/mid-training and shapes how it behaves and communicates, using instruction examples and human (or AI) preference feedback.",
        "That describes pretraining's role, not post-training — by this stage the model has already seen large amounts of raw text.",
        "Vocabulary size isn't the target of post-training; behavior, helpfulness, and alignment with human preferences are."
      ]
    },
    {
      q: "What kind of data is typically used during post-training?",
      options: [
        "Instruction/response examples plus preference comparisons between answers",
        "The exact same broad, unlabeled web-scale text used in pretraining, with nothing added",
        "No data at all — post-training happens purely through random parameter changes"
      ],
      correct: 0,
      why: [
        "Correct — this data teaches the model both what a good response looks like (instruction tuning) and which of two responses is preferred (used to train a reward signal for RLHF/RLAIF).",
        "Post-training specifically adds new kinds of data (instructions, preferences) beyond the original pretraining corpus — it isn't just a repeat of it.",
        "Post-training still relies on real data (instructions and preference judgments) to guide learning, not random changes."
      ]
    },
    {
      q: "What does 'specification gaming' mean in the context of a deployed RL system?",
      options: [
        "Scoring high on the stated goal while missing the intended one",
        "The agent refuses to take any actions in the environment",
        "The environment's rules change randomly every episode"
      ],
      correct: 0,
      why: [
        "Correct — this is essentially reward hacking viewed from a real-world deployment lens: the numbers look good, but the true underlying goal wasn't met.",
        "Specification gaming is about the agent acting in unintended ways, not about refusing to act.",
        "This term describes a mismatch between stated and true goals, not randomness in environment rules."
      ]
    },
    {
      q: "Which scenario best illustrates good reward design practice?",
      options: [
        "Rewarding a delivery robot for a safe, successful package delivery",
        "Rewarding a delivery robot only for how fast its wheels spin",
        "Giving the robot no reward signal and hoping it improves anyway"
      ],
      correct: 0,
      why: [
        "Correct — this reward is closely tied to the actual outcome you care about (successful, safe delivery), reducing the chance the agent finds a loophole that scores well but misses the real goal.",
        "Wheel spin speed is a poor proxy — the robot could spin its wheels rapidly while going nowhere or crashing, and still 'score well.'",
        "Without any reward signal, there's no learning objective at all — RL fundamentally depends on having a reward to optimize."
      ]
    },
    {
      q: "If you're deciding whether a business problem is a good candidate for RL, which question is most relevant?",
      options: [
        "Does it involve sequential decisions whose outcomes play out over time?",
        "Is there a spreadsheet of historical data with labeled correct answers?",
        "Can the problem be solved by sorting items into two fixed categories?"
      ],
      correct: 0,
      why: [
        "Correct — RL is best suited to problems with sequential decisions and delayed, measurable outcomes (like inventory management or personalized recommendations over time), not one-off predictions.",
        "That description fits supervised learning well; RL doesn't require labeled 'correct answers' at all.",
        "Fixed-category sorting is classification, a supervised learning task, not a sequential decision problem."
      ]
    }
  ]
};
