**_Motivation_**

-The code slowly sinks from engineering to hacking.

-When you have to add a feature to a program but the code is not structured in a convenient way, first refactor the program to make it easy to add the feature, then add the feature.

-As an experienced developer I can be sure that whatever scheme they come up with, they will change it again within six months. After all, when feature requests come, they come not as single spies but in battalions.

-Essence of the refactoring process: small changes and testing after each change.

-It's my coding standard to always call the return value from a function "result". That way I always know its role.

-With good names, I don't have to read the body of the function to see what it does.

-My overall advice on performance with refactoring is: Most of the time you should ignore it. If your refactoring introduces performance slow-downs, finish refactoring first and do performance tuning afterwards.

-Refactoring (noun): a change made to the internal structure of software to make it easier to understand and cheaper to modify without changing its observable behavior.

-If someone says their code was broken for a couple of days while they are refactoring, you can be pretty sure they were not refactoring.

-Refactoring is always done to make the code "easier to understand and cheaper to modify." This might speed things up or slow things down.

-If I need to add a new function and the design does not suit the change, I find it’s quicker to refactor first and then add the function.

-The problem of complicated merges gets exponentially worse as the length of feature branches increases. Integrating branches that are four weeks old is more than twice as hard as those that are a couple of weeks old. Many people, therefore, argue for keeping feature branches short—perhaps just a couple of days. Others, such as me, want them even shorter than that. This is an approach called Continuous Integration (CI), also known as Trunk-Based Development. With CI, each team member integrates with mainline at least once per day. This prevents any branches diverting too far from each other and thus greatly reduces the complexity of merges.

-The best time to refactor is just before I need to add a new feature to the code base

-Whenever I have to think to understand what the code is doing, I ask myself if I can refactor the code to make that understanding more immediately apparent.

-In fact, one of the most useful times to write tests is before I start programming. When I need to add a feature, I begin by writing the test. This isn’t as backward as it sounds. By writing the test, I'm asking myself what needs to be done to add the function. Writing the test also concentrates me on the interface rather than the implementation (always a good thing). It also means I have a clear point at which I'm done coding—when the test works.

-Refactoring requires tests. If you want to refactor, you have to write tests.
