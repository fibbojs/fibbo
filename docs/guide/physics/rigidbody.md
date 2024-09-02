# RigidBody

The real-time simulation of rigid-bodies subjected to forces and contacts is the main feature of a physics engine. Rigid-bodies are responsible for the dynamics and kinematics of a solid.

Rigid-bodies are typically used to simulate the dynamics of non-deformable solids as well as to integrate the trajectory of solids which velocities are controlled by the user (e.g. moving platforms).

On the other hand, rigid-bodies are not enough to simulate, e.g., cars, ragdolls, or robotic systems, as those use-cases require adding restrictions on the relative motion between their parts using [joints](/guide/physics/joints).

## Relation with colliders

A [collider](/guide/physics/colliders) can be attached to a rigid-body to specify its shape and enable collision-detection.

A rigid-body without collider attached to it will not be affected by contacts (because there is no shape to compute contact against).

## Types of rigid-bodies

There are 4 types of rigid-bodies :
