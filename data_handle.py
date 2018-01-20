import sys
import json
# trying to handle response
# savan morya
data = json.load(sys.stdin)
print(data.name)