## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|
### Association
- has_many :chats
  has_many :group_users

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user”

## chatsテーブル


|Column|Type|Options|
|------|----|-------|
|text|integer|null: false, foreign_key: true|
|image|integer|null: false, foreign_key: true|

### Association
- belongs_to : users


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|integer|null: false, foreign_key: true|
|member|integer|null: false, foreign_key: true|
### Association
- belongs_to :users


