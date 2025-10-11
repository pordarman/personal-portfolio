// GitHub'da olmayan diğer projelerimizi burada tutacağız.
// Her projenin kendine özgü bir 'id'si olmalı.
import spiritfallIcon from '../assets/spiritfall_preview.webp';
import teknofestIcon from '../assets/teknofest_preview.webp';

export const otherProjects = [
  {
    id: 'teknofest-2025-uav-competition',
    name: 'TEKNOFEST 2025 - UAV Competition Finalist',
    description: 'Led the software development for a high school team in an Unmanned Aerial Vehicle (UAV) competition, reaching the finals. We developed an autonomous drone capable of complex tasks like image recognition, payload delivery, and route tracking, finishing 16th out of 30 finalist teams.',
    imageUrl: teknofestIcon,
    tags: ['Python', 'DroneKit', 'MAVLink', 'Pixhawk', 'Raspberry Pi', 'OpenCV', 'YOLO'],
    language: 'Python',
    projectUrl: null,
    source: 'local',
    stars: null,
    createdAt: '2025-07-01',
    updatedAt: '2025-08-25',
    onGoing: false,
    order: 1, // This will make it appear first
    readme: `
![Me with the Drone](../assets/teknofest_me_drone.webp)

# TEKNOFEST 2025 - Unmanned Aerial Vehicle (UAV) Competition

This project is the culmination of an intense effort to design, build, and program an autonomous drone from scratch for a national UAV competition. As the software lead for my team, I was responsible for the entire software architecture, from flight control to autonomous mission execution.

---

## 🚀 Project Goal & Core Tasks

The primary objective was to develop a UAV capable of autonomously navigating a predefined route, identifying specific targets using computer vision, and delivering a payload (a water bottle) onto those targets.

**My Key Responsibilities:**
- **Flight Control Software:** I developed the high-level flight control system using Python and the DroneKit library, establishing communication between a Raspberry Pi and the Pixhawk flight controller via the MAVLink protocol.
- **Autonomous Mission Logic:** I implemented algorithms for autonomous takeoff, waypoint navigation, altitude control, and precision landing for payload delivery.
- **Computer Vision & AI:** I trained and integrated a YOLO (You Only Look Once) model with OpenCV to perform real-time object detection from the drone's camera feed, allowing it to identify and lock onto targets.
- **Simulation & Testing:** I conducted hundreds of simulations using QGroundControl and other SITL (Software-in-the-Loop) environments to debug the software and validate flight behavior before real-world tests.

---

### The Drone & The Team
*A brief look at our hardware and the dedicated team behind this project.*

![Our Drone](../assets/teknofest_drone.webp)
*A picture of our custom-built quadcopter.*

![Our Team](../assets/teknofest_team.webp)
*The team during one of our late-night work sessions at the workshop.*

---

## 🔧 Challenges & Key Learnings

This project was a marathon that tested not only my technical skills but also my ability to perform under pressure, manage team dynamics, and solve critical problems on the fly.

Beyond gaining expertise in technologies like DroneKit and MAVLink, this experience taught me:
- **Systematic Debugging:** The critical importance of root cause analysis when a complex system fails. A seemingly minor software bug or a loose wire could ground the entire operation.
- **Resilience & Crisis Management:** The ability to stay calm and devise logical solutions when faced with unexpected hardware failures minutes before a competition flight.
- **Leadership & Team Dynamics:** The invaluable experience of leading a software sub-team, managing responsibilities, and navigating the challenges of collaborative work under extreme stress.

---

### A Glimpse into the Code & System
*Screenshots from our development process.*

![QGroundControl Screenshot](../assets/qgroundcontrol_ss.webp)
*Pre-flight mission planning and simulation in QGroundControl.*

![Code Screenshot](../assets/code_ss.webp)
*A snippet of the Python code handling the autonomous flight logic.*

## 🏆 Outcome

Despite all the challenges, we successfully qualified as finalists and secured the 16th position among 30 teams. For me, this was more than just a competition; it was an invaluable real-world engineering experience that significantly elevated my skills in robotics, software development, and project management.
`
  },
  {
    id: 'spiritfall-2d-pixel-game',
    name: 'Spiritfall - 2D Pixel Game',
    description: 'Face a corrupted wilderness in this top-down action roguelite. A vile spirit has twisted animals into monsters, and you must survive their hordes. Your goal: purify, don\'t kill.',
    imageUrl: spiritfallIcon,
    tags: ['C#', 'Unity', 'Game Development', 'Pixel Art'],
    language: 'C#',
    projectUrl: null,
    source: 'local',
    stars: null,
    createdAt: '2025-06-28',
    updatedAt: '2025-08-14',
    onGoing: true,
    order: 2,
    readme: `
  # Spiritfall - 2D Top-Down Pixel Art Game

  Spiritfall is a 2D pixel-art action roguelite developed using C# and the Unity game engine. The project focuses on fast-paced combat, unique purification mechanics, and replayability through procedural content.

  ## 🎮 Game Concept

  Players control a character struggling to survive in a world where animals have been corrupted and transformed into monsters by a vile spirit. The main goal is not to kill, but to **purify** these spirits and restore balance to the wilderness.

  **Core Features:**
  - **Action & Survival:** Battle against ever-increasing waves of corrupted creatures using a variety of weapons and abilities.
  - **Roguelite Mechanics:** Each run offers different ability combinations, random enemy spawns, and unique upgrades, ensuring high replay value.
  - **Purification Mechanic:** Instead of killing enemies, players must purify them. Successfully purifying monsters grants experience, unlocks new skills, and progresses the story.
  - **Skill System:** Collect and combine purification powers to create custom builds for each playthrough.
  - **Procedural Levels:** Maps and enemy placements are procedurally generated, making every session unique.

  ## 🛠️ Technologies Used

  - **Game Engine:** Unity 2022.3
  - **Programming Language:** C#
  - **Graphics:** Pixel art created with Aseprite
  - **Audio:** Custom sound effects and music composed for immersive gameplay

  ## 🖼️ Development Screenshots

  ![In-game Screenshot 1](../assets/spiritfall_preview.webp)

  ## 🚧 Development Process & Challenges

  - **Purification System:** Designing a mechanic that rewards non-lethal gameplay required custom AI behaviors and state transitions for enemies.
  - **Procedural Generation:** Implemented algorithms for random map layouts and enemy waves to keep gameplay fresh.
  - **Pixel Art Animation:** Created frame-by-frame animations for characters and effects to enhance visual feedback.
  - **Performance Optimization:** Ensured smooth gameplay on low-end devices by optimizing rendering and physics calculations.
  - **Playtesting & Balancing:** Iteratively refined difficulty curves, ability synergies, and enemy behaviors based on player feedback.

  ## 🌟 What I Learned

  - Advanced Unity scripting (C#), including ScriptableObjects, custom editors, and event-driven architecture.
  - Pixel art workflow and animation pipelines.
  - Game design principles for roguelite progression and player engagement.
  - Debugging and profiling for real-time applications.

  ## 🏆 Project Status

  Spiritfall is currently in active development. Planned features include new enemy types, additional purification abilities, boss battles, and expanded story content. Feedback and collaboration are welcome!
    `
  }
  // Gelecekte buraya başka projeler ekleyebilirsin...
];