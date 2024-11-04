from locust import HttpUser, TaskSet, task, between

class ApiTest(TaskSet):
    
    @task
    def get_items(self):
        self.client.get("/api/items")

    @task
    def post_item(self):
        self.client.post("/api/items", json={"name": "New Item", "description": "This is a new item"})

    @task
    def put_item(self):
        self.client.put("/api/items/1", json={"name": "Updated Item", "description": "This item has been updated"})

    @task
    def delete_item(self):
        self.client.delete("/api/items/1")

class WebsiteUser(HttpUser):
    tasks = [ApiTest]
    wait_time = between(1, 5)
