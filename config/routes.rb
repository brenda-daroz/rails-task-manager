Rails.application.routes.draw do
  # Read all
  get "tasks", to: "tasks#index", as: :tasks
  # Create new task
  get "tasks/new", to: "tasks#new", as: :new_task
  post "tasks", to: "tasks#create"
  # Read one task
  get "tasks/:id", to: "tasks#show", as: :task
  #Edit one task
  get "tasks/:id/edit", to: "tasks#edit", as: :task_edit
  patch "tasks/:id", to: "tasks#update"
  #Delete one task
  delete "tasks/:id", to: "tasks#destroy"
end
