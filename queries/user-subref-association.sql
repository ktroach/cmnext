SELECT "User"."id",
       "Subsite"."id",
	   "Subsite"."subsiteRef" AS "subRef"
  FROM public."User"
  JOIN "Account" ON "User"."id" = "Account"."adminId"
  JOIN "Subsite" ON "Account"."id" = "Subsite"."accountId"
 WHERE "User"."name" = 'admin';    