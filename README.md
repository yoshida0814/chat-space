## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|index: true|
|email|string|null: false|
|password|string|null: false|
### Association
 has_many :chats
 has_many :group_users
 has_many :groups, through: :groups_users

## groups_usersテーブル

|Column|Typøe|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
belongs_to :group
belongs_to :user

## chatsテーブル

|Column|Type|Options|
|------|----|-------|
|text|text||
|image|string||
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
belongs_to :user
belongs_to :group

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|integer|null: false|
### Association
 has_many :chats
 has_many :group_users
 has_many :groups, through: :groups_users



