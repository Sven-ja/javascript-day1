let sentenceUnstruc = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up";


sentenceArray = sentenceUnstruc.split("$").join(" ");

/* in order to split by multiply dividers:
sentenceArray = sentenceUnstruc.split(/["$;"]/).join(" "); */

console.log(sentenceArray);