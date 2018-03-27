-- 107C subqueries
SELECT * from Users
WHERE id IN (select id from users
WHERE username Like '%michael%')
