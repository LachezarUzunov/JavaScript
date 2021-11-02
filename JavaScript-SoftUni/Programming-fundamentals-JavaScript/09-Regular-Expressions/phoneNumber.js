function phoneNumber(nums) {
  //
  let pattern =
    /(^| )((\+359)(-)2(-)\d{3}(-)\d{4}\b)|(^| )((\+359)( )2( )\d{3}( )\d{4}\b)/g;
  let validNums = [];

  let validNum = pattern.exec(nums);

  while (validNum != null) {
    validNums.push(validNum[0]);
    validNum = pattern.exec(nums);
  }
  console.log(validNums.join(", "));
}

phoneNumber(
  "+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222"
);
