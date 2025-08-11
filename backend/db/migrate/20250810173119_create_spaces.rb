class CreateSpaces < ActiveRecord::Migration[8.0]
  def change
    create_table :spaces do |t|
      t.string :name, null: false
      t.text :note, null: false, default: ''
      t.string :path, null: false
      t.timestamps
    end
  end
end
